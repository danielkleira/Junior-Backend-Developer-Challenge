import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import {
  CreateApplicationDto,
  FinishApplicationDto,
} from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    const user = createApplicationDto.user;
    const exam = createApplicationDto.exam;
    if (!user) {
      throw new HttpException(
        'Um id de usuário é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!exam) {
      return { message: 'Um id de exam é necessário' };
    }
    return this.applicationsService.create(user, exam);
  }

  @Post('/:id/finish')
  finishApplication(
    @Param('id') id: string,
    @Body() finishApplicationDto: FinishApplicationDto,
  ) {
    return this.applicationsService.finishApplication(
      id,
      finishApplicationDto.user,
      finishApplicationDto.submission,
    );
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.applicationsService.findAll(id);
  }

  @Get(':id/score')
  findScore(@Param('id') id: string) {
    return this.applicationsService.findScore(id);
  }
}
