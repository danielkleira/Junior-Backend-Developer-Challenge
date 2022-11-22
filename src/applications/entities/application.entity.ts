import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from 'src/users/entities/user.entity';
import { TechnicalExam } from 'src/technical_exam/entities/technical_exam.entity';
import { TechnicalExamSubmission } from 'src/technical_exam_submission/entities/technical_exam_submission.entity';

@Entity()
export class Application {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  score: number;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.applications, { nullable: true })
  user_: User;

  @OneToOne(() => TechnicalExam, { nullable: true })
  @JoinColumn()
  exam_: TechnicalExam;

  @OneToMany(() => TechnicalExamSubmission, (exam) => exam.application_, {
    nullable: true,
  })
  technicalExamSubmissions: TechnicalExamSubmission[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
