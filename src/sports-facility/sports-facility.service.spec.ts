import { Test, TestingModule } from '@nestjs/testing';
import { SportsFacilityService } from './sports-facility.service';

describe('SportsFacilityService', () => {
  let service: SportsFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportsFacilityService],
    }).compile();

    service = module.get<SportsFacilityService>(SportsFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
