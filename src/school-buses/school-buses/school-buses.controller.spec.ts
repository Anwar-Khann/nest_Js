import { Test, TestingModule } from '@nestjs/testing';
import { SchoolBusesController } from './school-buses.controller';
import { SchoolBusesService } from './school-buses.service';

describe('SchoolBusesController', () => {
  let controller: SchoolBusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolBusesController],
      providers: [SchoolBusesService],
    }).compile();

    controller = module.get<SchoolBusesController>(SchoolBusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
