import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamQuestion } from '../../technical_exam_questions/entities/technical_exam_question.entity';
import { Application } from '../../applications/entities/application.entity';

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

  @OneToMany(() => Application, (application) => application.id, {
    nullable: true,
  })
  application: Application[];

  @OneToMany(
    () => TechnicalExamQuestion,
    (technicalExamQuestion) => technicalExamQuestion.id,
    { nullable: true },
  )
  technicalExamQuestions: TechnicalExamQuestion[];

  constructor(testExam?: Partial<TechnicalExam>) {
    this.application = testExam?.application;
    this.created_at = testExam?.created_at;
    this.is_active = testExam?.is_active;
    this.name = testExam?.name;
    this.updated_at = testExam?.updated_at;
    this.technicalExamQuestions = testExam?.technicalExamQuestions;
    this.id = testExam?.id;

    if (!this.id) {
      this.id = uuid();
    }
  }
}
