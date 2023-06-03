import { Test, TestingModule } from '@nestjs/testing';
import { PrinciplesController } from './principles.controller';
import { PrinciplesService } from './principles.service';

describe('PrinciplesController', () => {
  let controller: PrinciplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrinciplesController],
      providers: [PrinciplesService],
    }).compile();

    controller = module.get<PrinciplesController>(PrinciplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
