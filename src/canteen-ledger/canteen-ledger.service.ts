import { Injectable } from '@nestjs/common';
import { CreateCanteenLedgerDto } from './dto/create-canteen-ledger.dto';
import { UpdateCanteenLedgerDto } from './dto/update-canteen-ledger.dto';

@Injectable()
export class CanteenLedgerService {
  create(createCanteenLedgerDto: CreateCanteenLedgerDto) {
    return 'This action adds a new canteenLedger';
  }

  findAll() {
    return `This action returns all canteenLedger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} canteenLedger`;
  }

  update(id: number, updateCanteenLedgerDto: UpdateCanteenLedgerDto) {
    return `This action updates a #${id} canteenLedger`;
  }

  remove(id: number) {
    return `This action removes a #${id} canteenLedger`;
  }
}
