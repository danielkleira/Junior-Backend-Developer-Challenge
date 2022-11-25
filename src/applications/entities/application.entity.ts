import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../../users/entities/user.entity';
import { TechnicalExam } from '../../technical_exam/entities/technical_exam.entity';
import { TechnicalExamSubmission } from '../../technical_exam_submission/entities/technical_exam_submission.entity';

@Entity()
export class Application {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  score: number;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.applications, { eager: true })
  @JoinColumn()
  user_: User;

  @ManyToOne(() => TechnicalExam, { nullable: true, eager: true })
  @JoinColumn()
  exam_: TechnicalExam;

  @OneToMany(() => TechnicalExamSubmission, (exam) => exam.application_, {
    nullable: true,
  })
  technicalExamSubmissions: TechnicalExamSubmission[];

  constructor(testApplication?: Partial<Application>) {
    this.created_at = testApplication?.created_at;
    this.exam_ = testApplication?.exam_;
    this.id = testApplication?.id;
    this.is_active = testApplication?.is_active;
    this.score = testApplication?.score;
    this.technicalExamSubmissions = testApplication?.technicalExamSubmissions;
    this.updated_at = testApplication?.updated_at;
    this.user_ = testApplication?.user_;
    if (!this.id) {
      this.id = uuid();
    }
  }
}
