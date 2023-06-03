import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanteenLedgerService } from './canteen-ledger.service';
import { CreateCanteenLedgerDto } from './dto/create-canteen-ledger.dto';
import { UpdateCanteenLedgerDto } from './dto/update-canteen-ledger.dto';

@Controller('canteen-ledger')
export class CanteenLedgerController {
  constructor(private readonly canteenLedgerService: CanteenLedgerService) {}

  @Post()
  create(@Body() createCanteenLedgerDto: CreateCanteenLedgerDto) {
    return this.canteenLedgerService.create(createCanteenLedgerDto);
  }

  @Get()
  findAll() {
    return this.canteenLedgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canteenLedgerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanteenLedgerDto: UpdateCanteenLedgerDto) {
    return this.canteenLedgerService.update(+id, updateCanteenLedgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canteenLedgerService.remove(+id);
  }
}
