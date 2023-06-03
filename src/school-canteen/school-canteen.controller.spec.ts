import { Test, TestingModule } from '@nestjs/testing';
import { SchoolCanteenController } from './school-canteen.controller';
import { SchoolCanteenService } from './school-canteen.service';

describe('SchoolCanteenController', () => {
  let controller: SchoolCanteenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolCanteenController],
      providers: [SchoolCanteenService],
    }).compile();

    controller = module.get<SchoolCanteenController>(SchoolCanteenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
