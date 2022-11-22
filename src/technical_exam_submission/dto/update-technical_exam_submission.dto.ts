import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalExamSubmissionDto } from './create-technical_exam_submission.dto';

export class UpdateTechnicalExamSubmissionDto extends PartialType(
  CreateTechnicalExamSubmissionDto,
) {}
