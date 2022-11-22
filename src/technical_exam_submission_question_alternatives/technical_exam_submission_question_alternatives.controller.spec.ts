import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExamSubmissionQuestionAlternativesController } from './technical_exam_submission_question_alternatives.controller';
import { TechnicalExamSubmissionQuestionAlternativesService } from './technical_exam_submission_question_alternatives.service';

describe('TechnicalExamSubmissionQuestionAlternativesController', () => {
  let controller: TechnicalExamSubmissionQuestionAlternativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExamSubmissionQuestionAlternativesController],
      providers: [TechnicalExamSubmissionQuestionAlternativesService],
    }).compile();

    controller =
      module.get<TechnicalExamSubmissionQuestionAlternativesController>(
        TechnicalExamSubmissionQuestionAlternativesController,
      );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
