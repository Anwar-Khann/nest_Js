import { Test, TestingModule } from '@nestjs/testing';
import { CanteenLedgerService } from './canteen-ledger.service';

describe('CanteenLedgerService', () => {
  let service: CanteenLedgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanteenLedgerService],
    }).compile();

    service = module.get<CanteenLedgerService>(CanteenLedgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
