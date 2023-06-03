import { Test, TestingModule } from '@nestjs/testing';
import { PrinciplesService } from './principles.service';

describe('PrinciplesService', () => {
  let service: PrinciplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrinciplesService],
    }).compile();

    service = module.get<PrinciplesService>(PrinciplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
