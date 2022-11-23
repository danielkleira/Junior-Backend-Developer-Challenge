import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';
import { Repository } from 'typeorm';
import { CreateTechnicalExamQuestionsAlternativeDto } from './dto/create-technical_exam_questions_alternative.dto';
import { UpdateTechnicalExamQuestionsAlternativeDto } from './dto/update-technical_exam_questions_alternative.dto';
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

  findAll() {
    return `This action returns all technicalExamQuestionsAlternatives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} technicalExamQuestionsAlternative`;
  }

  update(
    id: number,
    updateTechnicalExamQuestionsAlternativeDto: UpdateTechnicalExamQuestionsAlternativeDto,
  ) {
    return `This action updates a #${id} technicalExamQuestionsAlternative`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExamQuestionsAlternative`;
  }
}
