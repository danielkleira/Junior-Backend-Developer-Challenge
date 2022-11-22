import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamController } from './technical_exam.controller';
import { TechnicalExamService } from './technical_exam.service';

describe('TechnicalExamController', () => {
  let controller: TechnicalExamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamController],
      providers: [TechnicalExamService],
    }).compile();

    controller = module.get<TechnicalExamController>(TechnicalExamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
