import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { TechnicalExamSubmissionModel } from '../technical_exam_submissions/technicalExamSubmissions.model';
import { TechnicalExamQuestionsModel } from '../technical_exam_questions/technicalExamQuestions.model';

@Entity()
export class TechnicalExamSubmissionQuestionAlternativesModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(
    () => TechnicalExamSubmissionModel,
    (technicalExamSubmission) => technicalExamSubmission.id,
    { nullable: true },
  )
  technical_exam_submission_id: TechnicalExamSubmissionModel;

  @ManyToOne(
    () => TechnicalExamQuestionsModel,
    (technicalExamQuestions) => technicalExamQuestions.id,
    { nullable: true },
  )
  technical_exam_question_id: TechnicalExamQuestionsModel;

  @ManyToOne(
    () => TechnicalExamSubmissionQuestionAlternativesModel,
    (technicalExamQuestionAlternative) => technicalExamQuestionAlternative.id,
    { nullable: true },
  )
  technical_exam_question_alternative_id: TechnicalExamSubmissionQuestionAlternativesModel;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
