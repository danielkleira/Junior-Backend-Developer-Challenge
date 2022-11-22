import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamQuestionsAlternativesController } from './technical_exam_questions_alternatives.controller';
import { TechnicalExamQuestionsAlternativesService } from './technical_exam_questions_alternatives.service';

describe('TechnicalExamQuestionsAlternativesController', () => {
  let controller: TechnicalExamQuestionsAlternativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamQuestionsAlternativesController],
      providers: [TechnicalExamQuestionsAlternativesService],
    }).compile();

    controller = module.get<TechnicalExamQuestionsAlternativesController>(
      TechnicalExamQuestionsAlternativesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
