import { Test, TestingModule } from '@nestjs/testing';
import { SchoolCampusService } from './school-campus.service';

describe('SchoolCampusService', () => {
  let service: SchoolCampusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolCampusService],
    }).compile();

    service = module.get<SchoolCampusService>(SchoolCampusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
