import { Test, TestingModule } from '@nestjs/testing';
import { CanteenLedgerController } from './canteen-ledger.controller';
import { CanteenLedgerService } from './canteen-ledger.service';

describe('CanteenLedgerController', () => {
  let controller: CanteenLedgerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanteenLedgerController],
      providers: [CanteenLedgerService],
    }).compile();

    controller = module.get<CanteenLedgerController>(CanteenLedgerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
