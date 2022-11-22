import { Module } from '@nestjs/common';
import { TechnicalExamSubmissionQuestionAlternativesService } from './technical_exam_submission_question_alternatives.service';
import { TechnicalExamSubmissionQuestionAlternativesController } from './technical_exam_submission_question_alternatives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamSubmissionQuestionAlternative } from './entities/technical_exam_submission_question_alternative.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TechnicalExamSubmissionQuestionAlternative]),
  ],
  controllers: [TechnicalExamSubmissionQuestionAlternativesController],
  providers: [TechnicalExamSubmissionQuestionAlternativesService],
})
export class TechnicalExamSubmissionQuestionAlternativesModule {}
