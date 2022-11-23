import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';
import { TechnicalExamQuestionsAlternative } from 'src/technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';
import { Repository } from 'typeorm';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { UpdateTechnicalExamDto } from './dto/update-technical_exam.dto';
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
    const question = await this.questionRepository.findOneBy({
      id: idQuestion,
    });
    const alternatives = await this.alternativeRepository.find({
      where: { question_: { id: idQuestion } },
    });
    return {
      Prova: exam.name,
      questão: question.text,
      alternativas: alternatives,
    };
  }

  async findQuestions(id: string) {
    const exam = await this.questionRepository.find({
      where: { exam_: { id: id } },
    });

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

  update(id: number, updateTechnicalExamDto: UpdateTechnicalExamDto) {
    return `This action updates a #${id} technicalExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExam`;
  }
}
