import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalExamDto } from './create-technical_exam.dto';

export class UpdateTechnicalExamDto extends PartialType(
  CreateTechnicalExamDto,
) {}
