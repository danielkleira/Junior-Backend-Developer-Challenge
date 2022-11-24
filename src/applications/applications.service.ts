import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { where } from 'sequelize';
import { TechnicalExam } from 'src/technical_exam/entities/technical_exam.entity';
import { TechnicalExamSubmission } from 'src/technical_exam_submission/entities/technical_exam_submission.entity';
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

    @InjectRepository(TechnicalExam)
    private examRepository: Repository<TechnicalExam>,

    @InjectRepository(TechnicalExamSubmission)
    private submissionRepository: Repository<TechnicalExamSubmission>,
  ) {}

  async create(userId: string, examId: string): Promise<Application> {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });

    if (!user) {
      throw new NotFoundException('Usuário nao encontrado');
    }
    const exam = await this.examRepository.findOneBy({ id: examId });
    const app = new Application();
    app.score = 0;
    app.user_ = user;
    app.exam_ = exam;
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
  async finishApplication(id: string, user: string, submissionId: string) {
    console.log('aqui2================' + id, user, submissionId);
    const app = await this.appRepository.findOneBy({ id: id });

    const updateApp = Object.assign(app, (app.is_active = false));
    await this.appRepository.save(updateApp);

    const submission = await this.submissionRepository.findOneBy({
      id: submissionId,
    });

    const updateSubmission = Object.assign(
      submission,
      (submission.finish_at = new Date()),
    );

    await this.submissionRepository.save(updateSubmission);
    return { Status: 'Prova finalizada' };
  }

  async findScore(id: string) {
    const app = await this.appRepository.findOneBy({ id: id });
    return { score: app.score };
  }
}
