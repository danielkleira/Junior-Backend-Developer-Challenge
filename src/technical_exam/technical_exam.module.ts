import { Module } from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import { TechnicalExamController } from './technical_exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExam } from './entities/technical_exam.entity';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';
import { TechnicalExamQuestionsAlternative } from 'src/technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TechnicalExam,
      TechnicalExamQuestion,
      TechnicalExamQuestionsAlternative,
    ]),
  ],
  controllers: [TechnicalExamController],
  providers: [TechnicalExamService],
})
export class TechnicalExamModule {}
