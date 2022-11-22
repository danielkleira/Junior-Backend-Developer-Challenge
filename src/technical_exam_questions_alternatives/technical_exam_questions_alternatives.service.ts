import { Injectable } from '@nestjs/common';
import { CreateTechnicalExamQuestionsAlternativeDto } from './dto/create-technical_exam_questions_alternative.dto';
import { UpdateTechnicalExamQuestionsAlternativeDto } from './dto/update-technical_exam_questions_alternative.dto';

@Injectable()
export class TechnicalExamQuestionsAlternativesService {
  create(
    createTechnicalExamQuestionsAlternativeDto: CreateTechnicalExamQuestionsAlternativeDto,
  ) {
    return 'This action adds a new technicalExamQuestionsAlternative';
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
