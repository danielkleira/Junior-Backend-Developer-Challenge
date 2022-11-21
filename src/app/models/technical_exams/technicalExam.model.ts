import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { ApplicationsModel } from '../applications/applications.model';
import { TechnicalExamSubmissionQuestionAlternativesModel } from '../technical_exam_submission_question_alternatives/technicalExamSubmissionQuestionAlternatives.model';
import { TechnicalExamQuestionsModel } from '../technical_exam_questions/technicalExamQuestions.model';

@Entity()
export class TechnicalExamsModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  name: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => ApplicationsModel, (application) => application.exam_id, {
    nullable: true,
  })
  application: ApplicationsModel;

  @OneToMany(
    () => TechnicalExamQuestionsModel,
    (technicalExamQuestion) => technicalExamQuestion.id,
    { nullable: false },
  )
  technicalExamQuestions: TechnicalExamQuestionsModel[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
