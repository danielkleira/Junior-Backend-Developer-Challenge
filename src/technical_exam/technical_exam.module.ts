import { Module, forwardRef } from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import { TechnicalExamController } from './technical_exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExam } from './entities/technical_exam.entity';
import { TechnicalExamQuestion } from '../technical_exam_questions/entities/technical_exam_question.entity';
import { TechnicalExamQuestionsAlternative } from '../technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';
import { Application } from '../applications/entities/application.entity';
import { TechnicalExamSubmissionQuestionAlternative } from '../technical_exam_submission_question_alternatives/entities/technical_exam_submission_question_alternative.entity';
import { TechnicalExamSubmission } from '../technical_exam_submission/entities/technical_exam_submission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TechnicalExam,
      TechnicalExamQuestion,
      TechnicalExamQuestionsAlternative,
      Application,
      TechnicalExamSubmissionQuestionAlternative,
      TechnicalExamSubmission,
    ]),
  ],
  controllers: [TechnicalExamController],
  providers: [TechnicalExamService],
})
export class TechnicalExamModule {}
