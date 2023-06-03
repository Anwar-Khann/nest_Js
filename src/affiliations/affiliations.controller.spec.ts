import { Test, TestingModule } from '@nestjs/testing';
import { AffiliationsController } from './affiliations.controller';
import { AffiliationsService } from './affiliations.service';

describe('AffiliationsController', () => {
  let controller: AffiliationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffiliationsController],
      providers: [AffiliationsService],
    }).compile();

    controller = module.get<AffiliationsController>(AffiliationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
