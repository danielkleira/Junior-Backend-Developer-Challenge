import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicalExam } from '../technical_exam/entities/technical_exam.entity';
import { Repository } from 'typeorm';
import { CreateTechnicalExamQuestionDto } from './dto/create-technical_exam_question.dto';
import { TechnicalExamQuestion } from './entities/technical_exam_question.entity';

@Injectable()
export class TechnicalExamQuestionsService {
  constructor(
    @InjectRepository(TechnicalExamQuestion)
    private questionsRepository: Repository<TechnicalExamQuestion>,

    @InjectRepository(TechnicalExam)
    private examRepository: Repository<TechnicalExam>,
  ) {}

  async create(createTechnicalExamQuestionDto: CreateTechnicalExamQuestionDto) {
    const exam = await this.examRepository.findOneBy({
      id: createTechnicalExamQuestionDto.exam,
    });
    if (!exam) {
      throw new NotFoundException('Prova não encontrada');
    }

    const question = new TechnicalExamQuestion();
    question.title = createTechnicalExamQuestionDto.title;
    question.text = createTechnicalExamQuestionDto.text;
    question.exam_ = exam;

    const examQuestion = this.questionsRepository.create(question);
    return this.questionsRepository.save(examQuestion);
  }

  findAll() {
    return this.questionsRepository.find();
  }
}
