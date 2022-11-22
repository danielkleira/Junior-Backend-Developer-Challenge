import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamSubmissionQuestionAlternativesService } from './technical_exam_submission_question_alternatives.service';

describe('TechnicalExamSubmissionQuestionAlternativesService', () => {
  let service: TechnicalExamSubmissionQuestionAlternativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExamSubmissionQuestionAlternativesService],
    }).compile();

    service = module.get<TechnicalExamSubmissionQuestionAlternativesService>(
      TechnicalExamSubmissionQuestionAlternativesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
