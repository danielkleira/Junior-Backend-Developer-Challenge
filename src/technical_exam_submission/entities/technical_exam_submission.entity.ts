import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Application } from 'src/applications/entities/application.entity';

@Entity()
export class TechnicalExamSubmission {
  @PrimaryColumn('uuid')
  readonly id: string;

  @CreateDateColumn()
  started_at: Date;

  @Column({ nullable: true })
  finish_at: Date;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Application, (application) => application.id, {
    nullable: true,
  })
  application_: Application;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
