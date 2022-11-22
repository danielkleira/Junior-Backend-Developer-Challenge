import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExam } from 'src/technical_exam/entities/technical_exam.entity';
import { TechnicalExamQuestionsAlternative } from 'src/technical_exam_questions_alternatives/entities/technical_exam_questions_alternative.entity';
import { TechnicalExamSubmissionQuestionAlternative } from 'src/technical_exam_submission_question_alternatives/entities/technical_exam_submission_question_alternative.entity';

@Entity()
export class TechnicalExamQuestion {
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

  @OneToMany(
    () => TechnicalExam,
    (technicalExam) => technicalExam.technicalExamQuestions,
    { nullable: false },
  )
  exam_: TechnicalExam[];

  @OneToMany(
    () => TechnicalExamSubmissionQuestionAlternative,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.technical_exam_question_,
    { nullable: true },
  )
  technicalExamSubmissionQuestionAlternatives: TechnicalExamSubmissionQuestionAlternative[];

  @OneToMany(
    () => TechnicalExamQuestionsAlternative,
    (technicalExamSubmissionQuestionAlternatives) =>
      technicalExamSubmissionQuestionAlternatives.question_,
    { nullable: true },
  )
  technicalExamQuestionAlternatives: TechnicalExamQuestionsAlternative[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
