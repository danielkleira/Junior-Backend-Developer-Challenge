import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalExamSubmissionQuestionAlternativesService } from './technical_exam_submission_question_alternatives.service';
import { CreateTechnicalExamSubmissionQuestionAlternativeDto } from './dto/create-technical_exam_submission_question_alternative.dto';
import { UpdateTechnicalExamSubmissionQuestionAlternativeDto } from './dto/update-technical_exam_submission_question_alternative.dto';

@Controller('technical-exam-submission-question-alternatives')
export class TechnicalExamSubmissionQuestionAlternativesController {
  constructor(
    private readonly technicalExamSubmissionQuestionAlternativesService: TechnicalExamSubmissionQuestionAlternativesService,
  ) {}

  @Post()
  create(
    @Body()
    createTechnicalExamSubmissionQuestionAlternativeDto: CreateTechnicalExamSubmissionQuestionAlternativeDto,
  ) {
    return this.technicalExamSubmissionQuestionAlternativesService.create(
      createTechnicalExamSubmissionQuestionAlternativeDto,
    );
  }

  @Get()
  findAll() {
    return this.technicalExamSubmissionQuestionAlternativesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technicalExamSubmissionQuestionAlternativesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTechnicalExamSubmissionQuestionAlternativeDto: UpdateTechnicalExamSubmissionQuestionAlternativeDto,
  ) {
    return this.technicalExamSubmissionQuestionAlternativesService.update(
      +id,
      updateTechnicalExamSubmissionQuestionAlternativeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalExamSubmissionQuestionAlternativesService.remove(+id);
  }
}
