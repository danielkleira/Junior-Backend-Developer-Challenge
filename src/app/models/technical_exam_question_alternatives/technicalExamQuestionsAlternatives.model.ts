import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { TechnicalExamSubmissionQuestionAlternativesModel } from '../technical_exam_submission_question_alternatives/technicalExamSubmissionQuestionAlternatives.model';
import { TechnicalExamQuestionsModel } from '../technical_exam_questions/technicalExamQuestions.model';

@Entity()
export class TechnicalExamQuestionAlternativesModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  text: string;

  @Column({ length: 128 })
  is_correct: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(
    () => TechnicalExamSubmissionQuestionAlternativesModel,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.technical_exam_question_alternative_id,
    { nullable: true },
  )
  technical_exam_question_alternatives: TechnicalExamSubmissionQuestionAlternativesModel[];

  @ManyToOne(
    () => TechnicalExamQuestionsModel,
    (technicalExamQuestions) => technicalExamQuestions.id,
    { nullable: true },
  )
  question_id: TechnicalExamQuestionsModel;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
