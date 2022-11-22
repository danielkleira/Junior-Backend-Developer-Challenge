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
import { Application } from 'src/applications/entities/application.entity';

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
  readonly password: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Application, (application) => application.user_, {
    nullable: true,
  })
  applications: Application[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
