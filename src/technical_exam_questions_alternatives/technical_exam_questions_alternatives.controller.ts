import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';
import { CreateTechnicalExamQuestionsAlternativeDto } from './dto/create-technical_exam_questions_alternative.dto';
import { UpdateTechnicalExamQuestionsAlternativeDto } from './dto/update-technical_exam_questions_alternative.dto';

@Controller('technical-exam-questions-alternatives')
export class TechnicalExamQuestionsAlternativesController {
  constructor(
    private readonly technicalExamQuestionsAlternativesService: TechnicalExamQuestionsAlternativesService,
  ) {}

  @Post()
  create(
    @Body()
    createTechnicalExamQuestionsAlternativeDto: CreateTechnicalExamQuestionsAlternativeDto,
  ) {
    return this.technicalExamQuestionsAlternativesService.create(
      createTechnicalExamQuestionsAlternativeDto,
    );
  }

  @Get()
  findAll() {
    return this.technicalExamQuestionsAlternativesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technicalExamQuestionsAlternativesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTechnicalExamQuestionsAlternativeDto: UpdateTechnicalExamQuestionsAlternativeDto,
  ) {
    return this.technicalExamQuestionsAlternativesService.update(
      +id,
      updateTechnicalExamQuestionsAlternativeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalExamQuestionsAlternativesService.remove(+id);
  }
}
