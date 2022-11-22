import { Module } from '@nestjs/common';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';
import { TechnicalExamQuestionsAlternativesController } from './technical_exam_questions_alternatives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamQuestionsAlternative } from './entities/technical_exam_questions_alternative.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalExamQuestionsAlternative])],
  controllers: [TechnicalExamQuestionsAlternativesController],
  providers: [TechnicalExamQuestionsAlternativesService],
})
export class TechnicalExamQuestionsAlternativesModule {}
