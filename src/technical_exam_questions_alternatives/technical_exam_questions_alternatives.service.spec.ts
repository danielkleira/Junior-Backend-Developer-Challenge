import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';

describe('TechnicalExamQuestionsAlternativesService', () => {
  let service: TechnicalExamQuestionsAlternativesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExamQuestionsAlternativesService],
    }).compile();

    service = module.get<TechnicalExamQuestionsAlternativesService>(
      TechnicalExamQuestionsAlternativesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
