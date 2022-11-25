import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TechnicalExamQuestionsService } from './technical_exam_questions.service';
import { CreateTechnicalExamQuestionDto } from './dto/create-technical_exam_question.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Questions')
@Controller('questions')
export class TechnicalExamQuestionsController {
  constructor(
    private readonly technicalExamQuestionsService: TechnicalExamQuestionsService,
  ) {}

  @ApiOperation({ summary: 'Create a Question' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTechnicalExamQuestionDto: CreateTechnicalExamQuestionDto,
  ) {
    return this.technicalExamQuestionsService.create(
      createTechnicalExamQuestionDto,
    );
  }

  @ApiOperation({ summary: 'List All Questions' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.technicalExamQuestionsService.findAll();
  }
}
