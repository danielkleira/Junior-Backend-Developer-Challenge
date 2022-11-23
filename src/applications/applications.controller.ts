import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    const user = createApplicationDto.user;
    const exam = createApplicationDto.exam;
    return this.applicationsService.create(user, exam);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.applicationsService.findAll(id);
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(+id);
  } */

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    return this.applicationsService.update(+id, updateApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(+id);
  }
}
