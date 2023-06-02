import { Test, TestingModule } from '@nestjs/testing';
import { TrustiesController } from './trusties.controller';
import { TrustiesService } from './trusties.service';

describe('TrustiesController', () => {
  let controller: TrustiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrustiesController],
      providers: [TrustiesService],
    }).compile();

    controller = module.get<TrustiesController>(TrustiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
