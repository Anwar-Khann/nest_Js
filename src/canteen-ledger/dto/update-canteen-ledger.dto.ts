import { PartialType } from '@nestjs/mapped-types';
import { CreateCanteenLedgerDto } from './create-canteen-ledger.dto';

export class UpdateCanteenLedgerDto extends PartialType(CreateCanteenLedgerDto) {}
