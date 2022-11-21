import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { ApplicationsModel } from '../applications/applications.model';

@Entity()
export class TechnicalExamSubmissionModel {
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

  @ManyToOne(() => ApplicationsModel, (application) => application.id, {
    nullable: true,
  })
  application: ApplicationsModel;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
