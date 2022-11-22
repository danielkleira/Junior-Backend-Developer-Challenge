import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Application } from 'src/applications/entities/application.entity';

@Entity()
export class TechnicalExamSubmission {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  started_at: Date;

  @Column()
  finish_at: Date;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
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
