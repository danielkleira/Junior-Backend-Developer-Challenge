import { Injectable } from '@nestjs/common';
import { CreateTechnicalExamSubmissionDto } from './dto/create-technical_exam_submission.dto';
import { UpdateTechnicalExamSubmissionDto } from './dto/update-technical_exam_submission.dto';

@Injectable()
export class TechnicalExamSubmissionService {
  create(createTechnicalExamSubmissionDto: CreateTechnicalExamSubmissionDto) {
    return 'This action adds a new technicalExamSubmission';
  }

  findAll() {
    return `This action returns all technicalExamSubmission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} technicalExamSubmission`;
  }

  update(
    id: number,
    updateTechnicalExamSubmissionDto: UpdateTechnicalExamSubmissionDto,
  ) {
    return `This action updates a #${id} technicalExamSubmission`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExamSubmission`;
  }
}
