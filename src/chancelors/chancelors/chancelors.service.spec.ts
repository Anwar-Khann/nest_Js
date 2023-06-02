import { Test, TestingModule } from '@nestjs/testing';
import { ChancelorsService } from './chancelors.service';

describe('ChancelorsService', () => {
  let service: ChancelorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChancelorsService],
    }).compile();

    service = module.get<ChancelorsService>(ChancelorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
