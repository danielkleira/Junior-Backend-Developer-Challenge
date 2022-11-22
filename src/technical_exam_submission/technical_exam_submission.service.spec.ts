import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamSubmissionService } from './technical_exam_submission.service';

describe('TechnicalExamSubmissionService', () => {
  let service: TechnicalExamSubmissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExamSubmissionService],
    }).compile();

    service = module.get<TechnicalExamSubmissionService>(
      TechnicalExamSubmissionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
