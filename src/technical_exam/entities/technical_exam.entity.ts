import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';

@Entity()
export class TechnicalExam {
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

  @ManyToOne(
    () => TechnicalExamQuestion,
    (technicalExamQuestion) => technicalExamQuestion.id,
    { nullable: false },
  )
  technicalExamQuestions: TechnicalExamQuestion;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
