import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from '../applications/entities/application.entity';
import { TechnicalExamQuestion } from '../technical_exam_questions/entities/technical_exam_question.entity';
import { TechnicalExamQuestionsAlternative } from '../technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';
import { TechnicalExamSubmission } from '../technical_exam_submission/entities/technical_exam_submission.entity';
import { TechnicalExamSubmissionQuestionAlternative } from '../technical_exam_submission_question_alternatives/entities/technical_exam_submission_question_alternative.entity';
import { Repository } from 'typeorm';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { TechnicalExam } from './entities/technical_exam.entity';

@Injectable()
export class TechnicalExamService {
  constructor(
    @InjectRepository(TechnicalExam)
    private examRepository: Repository<TechnicalExam>,

    @InjectRepository(TechnicalExamQuestion)
    private questionRepository: Repository<TechnicalExamQuestion>,

    @InjectRepository(TechnicalExamQuestionsAlternative)
    private alternativeRepository: Repository<TechnicalExamQuestionsAlternative>,

    @InjectRepository(Application)
    private applicationRepository: Repository<Application>,

    @InjectRepository(TechnicalExamSubmissionQuestionAlternative)
    private submissionAlternativeRepository: Repository<TechnicalExamSubmissionQuestionAlternative>,

    @InjectRepository(TechnicalExamSubmission)
    private submissionRepository: Repository<TechnicalExamSubmission>,
  ) {}
  async create(createTechnicalExamDto: CreateTechnicalExamDto) {
    const exam = new TechnicalExam();
    exam.name = createTechnicalExamDto.name;
    const newExam = this.examRepository.create(exam);

    return this.examRepository.save(newExam);
  }

  async findAllExams() {
    return this.examRepository.find();
  }

  async findQuestionsWithAlternatives(idExam: string, idQuestion: string) {
    const exam = await this.examRepository.findOneBy({
      id: idExam,
    });

    if (!exam) {
      throw new NotFoundException('Exame n??o encontrado');
    }
    const question = await this.questionRepository.findOneBy({
      id: idQuestion,
    });
    if (!question) {
      throw new NotFoundException('Quest??o n??o encontrada');
    }
    const alternatives = await this.alternativeRepository.find({
      where: { question_: { id: idQuestion } },
    });
    if (alternatives.length === 0) {
      throw new NotFoundException('Alternativas n??o encontrada');
    }
    const newAlternativeReturn = [];
    for (let i = 0; i < alternatives.length; i++) {
      newAlternativeReturn.push({
        id: alternatives[i].id,
        text: alternatives[i].text,
      });
    }
    return {
      Prova: exam.name,
      quest??o: question.text,
      alternativas: newAlternativeReturn,
    };
  }

  async findOnlyQuestions(id: string) {
    const exam = await this.questionRepository.find({
      where: { exam_: { id: id } },
    });

    if (exam.length === 0) {
      throw new NotFoundException('Provas n??o encontradas');
    }

    const newReturn = [];
    for (let i = 0; i < exam.length; i++) {
      newReturn.push({
        id: exam[i].id,
        title: exam[i].title,
        text: exam[i].text,
      });
    }

    return newReturn;
  }

  async answerQuestion(
    application: string,
    alternative: string,
    examId: string,
    questionId: string,
  ) {
    const app = await this.applicationRepository.findOneBy({
      id: application,
    });

    if (!app) {
      throw new NotFoundException('Aplica????o n??o encontrada');
    }
    const question = await this.questionRepository.findOneBy({
      id: questionId,
    });
    if (!question) {
      throw new NotFoundException('Quest??o n??o encontrada');
    }

    const alternativeAnswer = await this.alternativeRepository.findOneBy({
      id: alternative,
    });
    if (!alternativeAnswer) {
      throw new NotFoundException('Alternativa n??o encontrada');
    }

    const exam = await this.examRepository.findOneBy({
      id: examId,
    });

    if (!exam) {
      throw new NotFoundException('Prova n??o encontrada');
    }

    if (exam.id !== question.exam_.id) {
      throw new HttpException(
        'Responda uma prova com uma quest??o v??lida dessa prova',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (app.exam_.id !== exam.id) {
      throw new HttpException(
        'Responda uma prova de uma aplica????o v??lida',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (app.is_active === false) {
      throw new HttpException(
        'Esta aplica????o j?? foi finalizada',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    if (alternativeAnswer.question_.id !== question.id) {
      throw new HttpException(
        'Responda uma quest??o com uma alternativa v??lida dessa quest??o',
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (alternativeAnswer.is_correct == true) {
      const incrementScore = Object.assign(app, (app.score += 1));
      await this.applicationRepository.save(incrementScore);
    }

    const examSubmission = new TechnicalExamSubmission();
    examSubmission.application_ = app;

    const examSubmissionOnApplication =
      this.submissionRepository.create(examSubmission);

    this.submissionRepository.save(examSubmissionOnApplication);

    const submission = new TechnicalExamSubmissionQuestionAlternative();
    submission.technical_exam_question_ = question;
    submission.technical_exam_question_alternative_ = alternativeAnswer;
    submission.technical_exam_submission_ = examSubmission;
    const questionAlternativeSubmission =
      this.submissionAlternativeRepository.create(submission);
    this.submissionAlternativeRepository.save(questionAlternativeSubmission);

    return {
      application: {
        id: app.id,
        score: app.score,
        usu??rio: { id: app.user_.id, nome: app.user_.first_name },
      },
      prova: { id: exam.id, Disciplina: exam.name },
      quest??o: {
        id: question.id,
        titulo: question.title,
        pergunta: question.text,
      },
      alternativa: {
        id: alternativeAnswer.id,
        opcao: alternativeAnswer.text,
      },
      submission: { id: examSubmissionOnApplication.id },
    };
  }
}
