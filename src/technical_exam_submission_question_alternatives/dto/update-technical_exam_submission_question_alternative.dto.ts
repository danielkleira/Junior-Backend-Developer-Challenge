import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalExamSubmissionQuestionAlternativeDto } from './create-technical_exam_submission_question_alternative.dto';

export class UpdateTechnicalExamSubmissionQuestionAlternativeDto extends PartialType(
  CreateTechnicalExamSubmissionQuestionAlternativeDto,
) {}
