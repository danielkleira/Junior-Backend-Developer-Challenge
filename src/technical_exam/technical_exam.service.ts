import { Injectable } from '@nestjs/common';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { UpdateTechnicalExamDto } from './dto/update-technical_exam.dto';

@Injectable()
export class TechnicalExamService {
  create(createTechnicalExamDto: CreateTechnicalExamDto) {
    return 'This action adds a new technicalExam';
  }

  findAll() {
    return `This action returns all technicalExam`;
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
