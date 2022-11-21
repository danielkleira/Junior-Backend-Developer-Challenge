import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { ApplicationsModel } from '../applications/applications.model';

@Entity()
export class UserModel {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ length: 128 })
  first_name: string;

  @Column({ length: 128 })
  givern_name: string;

  @Column({ length: 128 })
  email: string;

  @Column({ length: 128 })
  @Exclude()
  password: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => ApplicationsModel, (application) => application.user_id, {
    nullable: true,
  })
  applications: ApplicationsModel[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
