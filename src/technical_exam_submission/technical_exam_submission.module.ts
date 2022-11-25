import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamSubmission } from './entities/technical_exam_submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalExamSubmission])],
  controllers: [],
  providers: [],
})
export class TechnicalExamSubmissionModule {}
