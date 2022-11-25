import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicalExamQuestion } from '../technical_exam_questions/entities/technical_exam_question.entity';
import { Repository } from 'typeorm';
import { CreateTechnicalExamQuestionsAlternativeDto } from './dto/create-technical_exam_questions_alternative.dto';
import { TechnicalExamQuestionsAlternative } from './entities/technical_exam_questions_alternative.entity';

@Injectable()
export class TechnicalExamQuestionsAlternativesService {
  constructor(
    @InjectRepository(TechnicalExamQuestionsAlternative)
    private alternativesRepository: Repository<TechnicalExamQuestionsAlternative>,

    @InjectRepository(TechnicalExamQuestion)
    private questionsRepository: Repository<TechnicalExamQuestion>,
  ) {}
  async create(
    createTechnicalExamQuestionsAlternativeDto: CreateTechnicalExamQuestionsAlternativeDto,
  ) {
    const question = await this.questionsRepository.findOneBy({
      id: createTechnicalExamQuestionsAlternativeDto.question,
    });
    const alternative = new TechnicalExamQuestionsAlternative();
    alternative.text = createTechnicalExamQuestionsAlternativeDto.text;
    alternative.is_correct =
      createTechnicalExamQuestionsAlternativeDto.isCorrect;
    alternative.question_ = question;

    const newAlternative = this.alternativesRepository.create(alternative);
    return this.alternativesRepository.save(newAlternative);
  }
}
