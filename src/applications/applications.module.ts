import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { User } from '../users/entities/user.entity';
import { TechnicalExam } from '../technical_exam/entities/technical_exam.entity';
import { TechnicalExamSubmission } from '../technical_exam_submission/entities/technical_exam_submission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Application,
      User,
      TechnicalExam,
      TechnicalExamSubmission,
    ]),
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
