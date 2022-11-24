import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import {
  AnswerAlternativeDto,
  AnswerTechnicalExamDto,
  CreateTechnicalExamDto,
} from './dto/create-technical_exam.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('exams')
export class TechnicalExamController {
  constructor(private readonly technicalExamService: TechnicalExamService) {}

  @Post()
  create(@Body() createTechnicalExamDto: CreateTechnicalExamDto) {
    return this.technicalExamService.create(createTechnicalExamDto);
  }

  @Post(':exam_id/question/:question_id')
  answerQuestion(
    @Param('exam_id') exam: string,
    @Param('question_id') question: string,
    @Body() answerAternativeDto: AnswerAlternativeDto,
  ) {
    return this.technicalExamService.answerQuestion(
      answerAternativeDto.application,
      answerAternativeDto.alternative,
      exam,
      question,
    );
  }

  @Get()
  findAllExams() {
    return this.technicalExamService.findAllExams();
  }

  @Get(':exam_id/')
  findQuestion(@Param('exam_id') id: string) {
    console.log(id);
    return this.technicalExamService.findOnlyQuestions(id);
  }

  @Get(':exam_id/question/:question_id')
  findQuestionWithAlternative(
    @Param('exam_id') exam: string,
    @Param('question_id') question: string,
    @Body() AnswerTechnicalExamDto: AnswerTechnicalExamDto,
  ) {
    return this.technicalExamService.findQuestionsWithAlternatives(
      exam,
      question,
    );
  }
}
