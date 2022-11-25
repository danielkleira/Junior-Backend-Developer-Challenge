import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';
import { CreateTechnicalExamQuestionsAlternativeDto } from './dto/create-technical_exam_questions_alternative.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Technical Exam Alternatives')
@Controller('alternatives')
export class TechnicalExamQuestionsAlternativesController {
  constructor(
    private readonly technicalExamQuestionsAlternativesService: TechnicalExamQuestionsAlternativesService,
  ) {}

  @ApiOperation({ summary: 'Create Alternative' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body()
    createTechnicalExamQuestionsAlternativeDto: CreateTechnicalExamQuestionsAlternativeDto,
  ) {
    if (!createTechnicalExamQuestionsAlternativeDto) {
      throw new HttpException(
        'Um id de usuário é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.technicalExamQuestionsAlternativesService.create(
      createTechnicalExamQuestionsAlternativeDto,
    );
  }
}
