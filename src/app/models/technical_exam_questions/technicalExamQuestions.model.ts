import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { TechnicalExamsModel } from '../technical_exams/technicalExam.model';
import { TechnicalExamSubmissionQuestionAlternativesModel } from '../technical_exam_submission_question_alternatives/technicalExamSubmissionQuestionAlternatives.model';
import { TechnicalExamQuestionAlternativesModel } from '../technical_exam_question_alternatives/technicalExamQuestionsAlternatives.model';

@Entity()
export class TechnicalExamQuestionsModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  title: string;

  @Column({ length: 128 })
  text: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(
    () => TechnicalExamsModel,
    (technicalExam) => technicalExam.technicalExamQuestions,
    { nullable: false },
  )
  exam_id: TechnicalExamQuestionsModel;

  @OneToMany(
    () => TechnicalExamSubmissionQuestionAlternativesModel,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.technical_exam_question_id,
    { nullable: true },
  )
  technicalExamSubmissionQuestionAlternatives: TechnicalExamSubmissionQuestionAlternativesModel[];

  @OneToMany(
    () => TechnicalExamQuestionAlternativesModel,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.question_id,
    { nullable: true },
  )
  technicalExamQuestionAlternatives: TechnicalExamQuestionAlternativesModel[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
