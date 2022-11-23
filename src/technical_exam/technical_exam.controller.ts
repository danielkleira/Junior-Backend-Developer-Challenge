import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalExamService } from './technical_exam.service';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { UpdateTechnicalExamDto } from './dto/update-technical_exam.dto';

@Controller('exams')
export class TechnicalExamController {
  constructor(private readonly technicalExamService: TechnicalExamService) {}

  @Post()
  create(@Body() createTechnicalExamDto: CreateTechnicalExamDto) {
    return this.technicalExamService.create(createTechnicalExamDto);
  }

  @Get()
  findAllExams() {
    return this.technicalExamService.findAllExams();
  }

  @Get(':exam_id/question/:question_id')
  findQuestionWithAlternative(
    @Param('exam_id') exam: string,
    @Param('question_id') question: string,
  ) {
    return this.technicalExamService.findQuestionsWithAlternatives(
      exam,
      question,
    );
  }

  @Get(':exam_id/')
  findQuestion(@Param('exam_id') id: string) {
    console.log(id);
    return this.technicalExamService.findQuestions(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicalExamDto: UpdateTechnicalExamDto,
  ) {
    return this.technicalExamService.update(+id, updateTechnicalExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalExamService.remove(+id);
  }
}
