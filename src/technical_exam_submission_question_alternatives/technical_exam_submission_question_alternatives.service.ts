import { Injectable } from '@nestjs/common';
import { CreateTechnicalExamSubmissionQuestionAlternativeDto } from './dto/create-technical_exam_submission_question_alternative.dto';
import { UpdateTechnicalExamSubmissionQuestionAlternativeDto } from './dto/update-technical_exam_submission_question_alternative.dto';

@Injectable()
export class TechnicalExamSubmissionQuestionAlternativesService {
  create(
    createTechnicalExamSubmissionQuestionAlternativeDto: CreateTechnicalExamSubmissionQuestionAlternativeDto,
  ) {
    return 'This action adds a new technicalExamSubmissionQuestionAlternative';
  }

  findAll() {
    return `This action returns all technicalExamSubmissionQuestionAlternatives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} technicalExamSubmissionQuestionAlternative`;
  }

  update(
    id: number,
    updateTechnicalExamSubmissionQuestionAlternativeDto: UpdateTechnicalExamSubmissionQuestionAlternativeDto,
  ) {
    return `This action updates a #${id} technicalExamSubmissionQuestionAlternative`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExamSubmissionQuestionAlternative`;
  }
}
