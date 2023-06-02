import { Test, TestingModule } from '@nestjs/testing';
import { TrustiesService } from './trusties.service';

describe('TrustiesService', () => {
  let service: TrustiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrustiesService],
    }).compile();

    service = module.get<TrustiesService>(TrustiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
