import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamQuestionsService } from './technical_exam_questions.service';

describe('TechnicalExamQuestionsService', () => {
  let service: TechnicalExamQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExamQuestionsService],
    }).compile();

    service = module.get<TechnicalExamQuestionsService>(TechnicalExamQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
