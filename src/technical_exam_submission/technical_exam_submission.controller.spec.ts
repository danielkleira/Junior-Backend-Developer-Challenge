import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamSubmissionController } from './technical_exam_submission.controller';
import { TechnicalExamSubmissionService } from './technical_exam_submission.service';

describe('TechnicalExamSubmissionController', () => {
  let controller: TechnicalExamSubmissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamSubmissionController],
      providers: [TechnicalExamSubmissionService],
    }).compile();

    controller = module.get<TechnicalExamSubmissionController>(
      TechnicalExamSubmissionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
