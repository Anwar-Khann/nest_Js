import { Test, TestingModule } from '@nestjs/testing';
import { SchoolCanteenService } from './school-canteen.service';

describe('SchoolCanteenService', () => {
  let service: SchoolCanteenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolCanteenService],
    }).compile();

    service = module.get<SchoolCanteenService>(SchoolCanteenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
