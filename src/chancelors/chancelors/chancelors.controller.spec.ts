import { Test, TestingModule } from '@nestjs/testing';
import { ChancelorsController } from './chancelors.controller';
import { ChancelorsService } from './chancelors.service';

describe('ChancelorsController', () => {
  let controller: ChancelorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChancelorsController],
      providers: [ChancelorsService],
    }).compile();

    controller = module.get<ChancelorsController>(ChancelorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
