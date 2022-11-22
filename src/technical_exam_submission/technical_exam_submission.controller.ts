import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalExamSubmissionService } from './technical_exam_submission.service';
import { CreateTechnicalExamSubmissionDto } from './dto/create-technical_exam_submission.dto';
import { UpdateTechnicalExamSubmissionDto } from './dto/update-technical_exam_submission.dto';

@Controller('technical-exam-submission')
export class TechnicalExamSubmissionController {
  constructor(
    private readonly technicalExamSubmissionService: TechnicalExamSubmissionService,
  ) {}

  @Post()
  create(
    @Body() createTechnicalExamSubmissionDto: CreateTechnicalExamSubmissionDto,
  ) {
    return this.technicalExamSubmissionService.create(
      createTechnicalExamSubmissionDto,
    );
  }

  @Get()
  findAll() {
    return this.technicalExamSubmissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technicalExamSubmissionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicalExamSubmissionDto: UpdateTechnicalExamSubmissionDto,
  ) {
    return this.technicalExamSubmissionService.update(
      +id,
      updateTechnicalExamSubmissionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalExamSubmissionService.remove(+id);
  }
}
