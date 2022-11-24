import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamSubmissionQuestionAlternative } from 'src/technical_exam_submission_question_alternatives/entities/technical_exam_submission_question_alternative.entity';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';

@Entity()
export class TechnicalExamQuestionsAlternative {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  text: string;

  @Column()
  is_correct: boolean;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => TechnicalExamSubmissionQuestionAlternative,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.technical_exam_question_alternative_,
    { nullable: true },
  )
  technical_exam_question_alternatives: TechnicalExamSubmissionQuestionAlternative[];

  @ManyToOne(
    () => TechnicalExamQuestion,
    (technicalExamQuestions) => technicalExamQuestions.id,
    { nullable: true, eager: true },
  )
  question_: TechnicalExamQuestion;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
