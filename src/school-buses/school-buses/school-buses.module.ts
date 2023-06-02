import { Module } from '@nestjs/common';
import { SchoolBusesService } from './school-buses.service';
import { SchoolBusesController } from './school-buses.controller';

@Module({
  controllers: [SchoolBusesController],
  providers: [SchoolBusesService]
})
export class SchoolBusesModule {}
