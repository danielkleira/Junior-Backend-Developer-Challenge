import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { Application } from '../../applications/entities/application.entity';

@Entity()
export class User {
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

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Application, (application) => application.user_, {
    nullable: true,
  })
  applications: Application[];

  constructor(testUser?: Partial<User>) {
    this.applications = testUser?.applications;
    this.created_at = testUser?.created_at;
    this.email = testUser?.email;
    this.first_name = testUser?.first_name;
    this.givern_name = testUser?.givern_name;
    this.id = testUser?.id;
    this.is_active = testUser?.is_active;
    this.password = testUser?.password;
    this.updated_at = testUser?.updated_at;
    if (!this.id) {
      this.id = uuid();
    }
  }
}
