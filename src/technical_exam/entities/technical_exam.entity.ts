import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamQuestion } from 'src/technical_exam_questions/entities/technical_exam_question.entity';

@Entity()
export class TechnicalExam {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  name: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => TechnicalExamQuestion,
    (technicalExamQuestion) => technicalExamQuestion.id,
    { nullable: true },
  )
  technicalExamQuestions: TechnicalExamQuestion[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
