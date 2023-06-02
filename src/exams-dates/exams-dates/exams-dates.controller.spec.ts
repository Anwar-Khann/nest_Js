import { Test, TestingModule } from '@nestjs/testing';
import { ExamsDatesController } from './exams-dates.controller';
import { ExamsDatesService } from './exams-dates.service';

describe('ExamsDatesController', () => {
  let controller: ExamsDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamsDatesController],
      providers: [ExamsDatesService],
    }).compile();

    controller = module.get<ExamsDatesController>(ExamsDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
