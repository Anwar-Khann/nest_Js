import { Test, TestingModule } from '@nestjs/testing';
import { SportsFacilityController } from './sports-facility.controller';
import { SportsFacilityService } from './sports-facility.service';

describe('SportsFacilityController', () => {
  let controller: SportsFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportsFacilityController],
      providers: [SportsFacilityService],
    }).compile();

    controller = module.get<SportsFacilityController>(SportsFacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
