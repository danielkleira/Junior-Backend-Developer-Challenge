import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamService } from './technical_exam.service';

describe('TechnicalExamService', () => {
  let service: TechnicalExamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExamService],
    }).compile();

    service = module.get<TechnicalExamService>(TechnicalExamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
