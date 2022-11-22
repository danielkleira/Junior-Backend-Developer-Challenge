import { Module } from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import { TechnicalExamController } from './technical_exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalExam } from './entities/technical_exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalExam])],
  controllers: [TechnicalExamController],
  providers: [TechnicalExamService],
})
export class TechnicalExamModule {}
