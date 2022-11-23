import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamQuestionsController } from './technical_exam_questions.controller';
import { TechnicalExamQuestionsService } from './technical_exam_questions.service';

describe('TechnicalExamQuestionsController', () => {
  let controller: TechnicalExamQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamQuestionsController],
      providers: [TechnicalExamQuestionsService],
    }).compile();

    controller = module.get<TechnicalExamQuestionsController>(
      TechnicalExamQuestionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
