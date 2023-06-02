import { Test, TestingModule } from '@nestjs/testing';
import { SchoolCampusController } from './school-campus.controller';
import { SchoolCampusService } from './school-campus.service';

describe('SchoolCampusController', () => {
  let controller: SchoolCampusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolCampusController],
      providers: [SchoolCampusService],
    }).compile();

    controller = module.get<SchoolCampusController>(SchoolCampusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
