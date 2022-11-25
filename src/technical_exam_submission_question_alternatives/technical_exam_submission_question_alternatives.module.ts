import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamSubmissionQuestionAlternative } from './entities/technical_exam_submission_question_alternative.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TechnicalExamSubmissionQuestionAlternative]),
  ],
  controllers: [],
  providers: [],
})
export class TechnicalExamSubmissionQuestionAlternativesModule {}
