import { Test, TestingModule } from '@nestjs/testing';
import { SchoolBusesService } from './school-buses.service';

describe('SchoolBusesService', () => {
  let service: SchoolBusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolBusesService],
    }).compile();

    service = module.get<SchoolBusesService>(SchoolBusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
