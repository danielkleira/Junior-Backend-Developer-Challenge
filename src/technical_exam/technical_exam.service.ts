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
      throw new NotFoundException('Exame não encontrado');
    }
    const question = await this.questionRepository.findOneBy({
      id: idQuestion,
    });
    if (!question) {
      throw new NotFoundException('Questão não encontrada');
    }
    const alternatives = await this.alternativeRepository.find({
      where: { question_: { id: idQuestion } },
    });
    if (alternatives.length === 0) {
      throw new NotFoundException('Alternativas não encontrada');
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
      questão: question.text,
      alternativas: newAlternativeReturn,
    };
  }

  async findOnlyQuestions(id: string) {
    const exam = await this.questionRepository.find({
      where: { exam_: { id: id } },
    });

    if (exam.length === 0) {
      throw new NotFoundException('Provas não encontradas');
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
      throw new NotFoundException('Aplicação não encontrada');
    }
    const question = await this.questionRepository.findOneBy({
      id: questionId,
    });
    if (!question) {
      throw new NotFoundException('Questão não encontrada');
    }

    const alternativeAnswer = await this.alternativeRepository.findOneBy({
      id: alternative,
    });
    if (!alternativeAnswer) {
      throw new NotFoundException('Alternativa não encontrada');
    }

    const exam = await this.examRepository.findOneBy({
      id: examId,
    });

    if (!exam) {
      throw new NotFoundException('Prova não encontrada');
    }

    if (exam.id !== question.exam_.id) {
      throw new HttpException(
        'Responda uma prova com uma questão válida dessa prova',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (app.exam_.id !== exam.id) {
      throw new HttpException(
        'Responda uma prova de uma aplicação válida',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (app.is_active === false) {
      throw new HttpException(
        'Esta aplicação já foi finalizada',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    if (alternativeAnswer.question_.id !== question.id) {
      throw new HttpException(
        'Responda uma questão com uma alternativa válida dessa questão',
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
        usuário: { id: app.user_.id, nome: app.user_.first_name },
      },
      prova: { id: exam.id, Disciplina: exam.name },
      questão: {
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
