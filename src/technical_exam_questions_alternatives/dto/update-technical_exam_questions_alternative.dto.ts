import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalExamQuestionsAlternativeDto } from './create-technical_exam_questions_alternative.dto';

export class UpdateTechnicalExamQuestionsAlternativeDto extends PartialType(
  CreateTechnicalExamQuestionsAlternativeDto,
) {}
