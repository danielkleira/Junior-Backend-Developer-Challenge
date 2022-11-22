import { Injectable } from '@nestjs/common';
import { CreateTechnicalExamQuestionDto } from './dto/create-technical_exam_question.dto';
import { UpdateTechnicalExamQuestionDto } from './dto/update-technical_exam_question.dto';

@Injectable()
export class TechnicalExamQuestionsService {
  create(createTechnicalExamQuestionDto: CreateTechnicalExamQuestionDto) {
    return 'This action adds a new technicalExamQuestion';
  }

  findAll() {
    return `This action returns all technicalExamQuestions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} technicalExamQuestion`;
  }

  update(id: number, updateTechnicalExamQuestionDto: UpdateTechnicalExamQuestionDto) {
    return `This action updates a #${id} technicalExamQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExamQuestion`;
  }
}
