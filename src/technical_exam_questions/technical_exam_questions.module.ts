import { Module } from '@nestjs/common';
import { TechnicalExamQuestionsService } from './technical_exam_questions.service';
import { TechnicalExamQuestionsController } from './technical_exam_questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamQuestion } from './entities/technical_exam_question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalExamQuestion])],
  controllers: [TechnicalExamQuestionsController],
  providers: [TechnicalExamQuestionsService],
})
export class TechnicalExamQuestionsModule {}
