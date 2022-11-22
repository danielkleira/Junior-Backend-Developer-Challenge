import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamSubmission } from 'src/technical_exam_submission/entities/technical_exam_submission.entity';
import { TechnicalExamQuestionsAlternative } from 'src/technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';

@Entity()
export class TechnicalExamSubmissionQuestionAlternative {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(
    () => TechnicalExamSubmission,
    (technicalExamSubmission) => technicalExamSubmission.id,
    { nullable: true },
  )
  technical_exam_submission_: TechnicalExamSubmission;

  @ManyToOne(
    () => TechnicalExamQuestion,
    (technicalExamQuestions) => technicalExamQuestions.id,
    { nullable: true },
  )
  technical_exam_question_: TechnicalExamQuestion;

  @ManyToOne(
    () => TechnicalExamQuestionsAlternative,
    (technicalExamQuestionAlternative) => technicalExamQuestionAlternative.id,
    { nullable: true },
  )
  technical_exam_question_alternative_: TechnicalExamQuestionsAlternative;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
