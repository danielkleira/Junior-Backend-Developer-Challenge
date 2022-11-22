import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: true,
  migrationsRun: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/*.js'],
  migrationsTableName: 'history',
});
