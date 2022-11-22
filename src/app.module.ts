import { Module } from '@nestjs/common';
import 'dotenv/config';
import { ApplicationsModule } from './applications/applications.module';
import { TechnicalExamModule } from './technical_exam/technical_exam.module';
import { UsersModule } from './users/users.module';
import { TechnicalExamQuestionsModule } from './technical_exam_questions/technical_exam_questions.module';
import { TechnicalExamQuestionsAlternativesModule } from './technical_exam_questions_alternatives/technical_exam_questions_alternatives.module';
import { TechnicalExamSubmissionModule } from './technical_exam_submission/technical_exam_submission.module';
import { TechnicalExamSubmissionQuestionAlternativesModule } from './technical_exam_submission_question_alternatives/technical_exam_submission_question_alternatives.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),
    TechnicalExamModule,
    TechnicalExamQuestionsModule,
    TechnicalExamSubmissionQuestionAlternativesModule,
    ApplicationsModule,
    UsersModule,
    TechnicalExamQuestionsAlternativesModule,
    TechnicalExamSubmissionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
