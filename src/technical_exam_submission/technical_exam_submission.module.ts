import { Module } from '@nestjs/common';
import { TechnicalExamSubmissionService } from './technical_exam_submission.service';
import { TechnicalExamSubmissionController } from './technical_exam_submission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExamSubmission } from './entities/technical_exam_submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalExamSubmission])],
  controllers: [TechnicalExamSubmissionController],
  providers: [TechnicalExamSubmissionService],
})
export class TechnicalExamSubmissionModule {}
