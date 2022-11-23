import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { where } from 'sequelize';
import { TechnicalExam } from 'src/technical_exam/entities/technical_exam.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private appRepository: Repository<Application>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userId: string, examId: string): Promise<Application> {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });

    const app = new Application();
    app.score = 0;
    app.user_ = user;
    app.technicalExamSubmissions = [];
    const application = this.appRepository.create(app);

    return this.appRepository.save(application);
  }

  async findAll(userId: string): Promise<Application[]> {
    const user = await this.userRepository.find();
    const userUniq = user.filter((user) => user.id === userId);

    const applications = await this.appRepository.find({
      where: { user_: { id: userUniq[0].id } },
    });
    return applications;
  }

  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
