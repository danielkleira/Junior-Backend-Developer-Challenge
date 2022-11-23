import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalExamQuestionsService } from './technical_exam_questions.service';
import { CreateTechnicalExamQuestionDto } from './dto/create-technical_exam_question.dto';
import { UpdateTechnicalExamQuestionDto } from './dto/update-technical_exam_question.dto';

@Controller('questions')
export class TechnicalExamQuestionsController {
  constructor(
    private readonly technicalExamQuestionsService: TechnicalExamQuestionsService,
  ) {}

  @Post()
  create(
    @Body() createTechnicalExamQuestionDto: CreateTechnicalExamQuestionDto,
  ) {
    return this.technicalExamQuestionsService.create(
      createTechnicalExamQuestionDto,
    );
  }

  @Get()
  findAll() {
    return this.technicalExamQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technicalExamQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicalExamQuestionDto: UpdateTechnicalExamQuestionDto,
  ) {
    return this.technicalExamQuestionsService.update(
      +id,
      updateTechnicalExamQuestionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalExamQuestionsService.remove(+id);
  }
}
