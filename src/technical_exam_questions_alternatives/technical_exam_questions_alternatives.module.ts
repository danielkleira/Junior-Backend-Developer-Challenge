import { Module } from '@nestjs/common';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';
import { TechnicalExamQuestionsAlternativesController } from './technical_exam_questions_alternatives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamQuestionsAlternative } from './entities/technical_exam_questions_alternative.entity';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TechnicalExamQuestionsAlternative,
      TechnicalExamQuestion,
    ]),
  ],
  controllers: [TechnicalExamQuestionsAlternativesController],
  providers: [TechnicalExamQuestionsAlternativesService],
})
export class TechnicalExamQuestionsAlternativesModule {}
