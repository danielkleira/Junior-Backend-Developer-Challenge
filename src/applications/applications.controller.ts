import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import {
  CreateApplicationDto,
  FinishApplicationDto,
} from './dto/create-application.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @ApiOperation({ summary: 'Create Application' })
  @UseGuards(JwtAuthGuard)
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
      throw new HttpException(
        'Um id de prova é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.applicationsService.create(user, exam);
  }

  @ApiOperation({ summary: 'Finish Application' })
  @UseGuards(JwtAuthGuard)
  @Post('/:id/finish')
  finishApplication(
    @Param('id') id: string,
    @Body() finishApplicationDto: FinishApplicationDto,
  ) {
    if (!id) {
      throw new HttpException(
        'Um id de aplicação é necessário na url',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!finishApplicationDto.user) {
      throw new HttpException(
        'Um id de usuário é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!finishApplicationDto.submission) {
      throw new HttpException(
        'Um id de submissão é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.applicationsService.finishApplication(
      id,
      finishApplicationDto.user,
      finishApplicationDto.submission,
    );
  }

  @ApiOperation({ summary: 'List Application' })
  @Get(':id')
  findAll(@Param('id') id: string) {
    if (!id) {
      throw new HttpException(
        'Um id de usuário é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.applicationsService.findAll(id);
  }

  @ApiOperation({ summary: 'Find Score' })
  @UseGuards(JwtAuthGuard)
  @Get(':id/score')
  findScore(@Param('id') id: string) {
    if (!id) {
      throw new HttpException(
        'Um id de aplicação é necessário',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.applicationsService.findScore(id);
  }
}
