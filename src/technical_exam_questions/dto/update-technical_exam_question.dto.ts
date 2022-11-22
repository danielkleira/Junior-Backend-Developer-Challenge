import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalExamQuestionDto } from './create-technical_exam_question.dto';

export class UpdateTechnicalExamQuestionDto extends PartialType(
  CreateTechnicalExamQuestionDto,
) {}
