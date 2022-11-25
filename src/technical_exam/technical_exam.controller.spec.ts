import { Test, TestingModule } from '@nestjs/testing';
import { CreateTechnicalExamDto } from './dto/create-technical_exam.dto';
import { TechnicalExam } from './entities/technical_exam.entity';
import { TechnicalExamController } from './technical_exam.controller';
import { TechnicalExamService } from './technical_exam.service';
import { AuthService } from '../auth/auth.service';

const examEntityCreate: TechnicalExam = new TechnicalExam({
  name: 'Prova teste',
});

describe('UsersController', () => {
  let Examcontroller: TechnicalExamController;
  let Examservice: TechnicalExamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamController],
      providers: [
        {
          provide: TechnicalExamService,
          useValue: {
            create: jest.fn().mockResolvedValue(examEntityCreate),
            login: jest.fn(),
          },
        },
        { provide: AuthService, useValue: {} },
      ],
    }).compile();

    Examcontroller = module.get<TechnicalExamController>(
      TechnicalExamController,
    );
    Examservice = module.get<TechnicalExamService>(TechnicalExamService);
  });

  it('should be defined', () => {
    expect(Examcontroller).toBeDefined();
    expect(Examservice).toBeDefined();
  });

  describe('createUser', () => {
    it('should return a created user', async () => {
      const body: CreateTechnicalExamDto = {
        name: 'Prova teste',
      };
      const result = await Examcontroller.create(body);
      expect(result).toEqual(examEntityCreate);
    });
  });
});
