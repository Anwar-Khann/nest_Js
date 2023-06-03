import { Module } from '@nestjs/common';
import { CanteenLedgerService } from './canteen-ledger.service';
import { CanteenLedgerController } from './canteen-ledger.controller';

@Module({
  controllers: [CanteenLedgerController],
  providers: [CanteenLedgerService]
})
export class CanteenLedgerModule {}
