import { Test, TestingModule } from '@nestjs/testing';
import { ExamsDatesService } from './exams-dates.service';

describe('ExamsDatesService', () => {
  let service: ExamsDatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamsDatesService],
    }).compile();

    service = module.get<ExamsDatesService>(ExamsDatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
