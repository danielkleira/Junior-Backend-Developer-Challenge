import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import {
  AnswerAlternativeDto,
  CreateTechnicalExamDto,
} from './dto/create-technical_exam.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Exams')
@Controller('exams')
export class TechnicalExamController {
  constructor(private readonly technicalExamService: TechnicalExamService) {}

  @ApiOperation({ summary: 'Create Exam' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTechnicalExamDto: CreateTechnicalExamDto) {
    return this.technicalExamService.create(createTechnicalExamDto);
  }

  @ApiOperation({ summary: 'Answer Question' })
  @UseGuards(JwtAuthGuard)
  @Post(':exam_id/question/:question_id')
  answerQuestion(
    @Param('exam_id') exam: string,
    @Param('question_id') question: string,
    @Body() answerAternativeDto: AnswerAlternativeDto,
  ) {
    if (!exam) {
      throw new HttpException(
        'Um id de exam é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!question) {
      throw new HttpException(
        'Um id de question é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.technicalExamService.answerQuestion(
      answerAternativeDto.application,
      answerAternativeDto.alternative,
      exam,
      question,
    );
  }

  @ApiOperation({ summary: 'List All Exams' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAllExams() {
    return this.technicalExamService.findAllExams();
  }

  @ApiOperation({ summary: 'List Questions of an Exam' })
  @Get(':exam_id/')
  findQuestion(@Param('exam_id') id: string) {
    if (!id) {
      throw new HttpException(
        'Um id de prova é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.technicalExamService.findOnlyQuestions(id);
  }

  @ApiOperation({ summary: 'List Question With Alternatives' })
  @UseGuards(JwtAuthGuard)
  @Get(':exam_id/question/:question_id')
  findQuestionWithAlternative(
    @Param('exam_id') exam: string,
    @Param('question_id') question: string,
  ) {
    if (!exam) {
      throw new HttpException(
        'Um id de prova é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!question) {
      throw new HttpException(
        'Um id de question é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.technicalExamService.findQuestionsWithAlternatives(
      exam,
      question,
    );
  }
}
