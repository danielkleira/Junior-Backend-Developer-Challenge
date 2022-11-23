import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { UpdateTechnicalExamDto } from './dto/update-technical_exam.dto';
import { TechnicalExam } from './entities/technical_exam.entity';

@Injectable()
export class TechnicalExamService {
  constructor(
    @InjectRepository(TechnicalExam)
    private examRepository: Repository<TechnicalExam>,
  ) {}
  async create(createTechnicalExamDto: CreateTechnicalExamDto) {
    const exam = new TechnicalExam();
    exam.name = createTechnicalExamDto.name;
    const newExam = this.examRepository.create(exam);

    return this.examRepository.save(newExam);
  }

  findAll() {
    const exams = this.examRepository.find();
    return exams;
  }

  findOne(id: number) {
    return `This action returns a #${id} technicalExam`;
  }

  update(id: number, updateTechnicalExamDto: UpdateTechnicalExamDto) {
    return `This action updates a #${id} technicalExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} technicalExam`;
  }
}
