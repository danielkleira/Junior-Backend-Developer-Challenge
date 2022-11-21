import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TechnicalExamsModel } from '../technical_exams/technicalExam.model';
import { TechnicalExamSubmissionModel } from '../technical_exam_submissions/technicalExamSubmissions.model';
import { UserModel } from '../users/user.model';

@Entity()
export class ApplicationsModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  score: number;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => UserModel, (user) => user.applications, { nullable: true })
  user_id: UserModel;

  @OneToMany(() => TechnicalExamsModel, (exam) => exam.id, { nullable: true })
  exam_id: TechnicalExamsModel[];

  @OneToMany(() => TechnicalExamSubmissionModel, (exam) => exam.application, {
    nullable: true,
  })
  technicalExamSubmissions: TechnicalExamSubmissionModel[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
