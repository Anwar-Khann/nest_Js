import { Module } from '@nestjs/common';
import { SchoolBusesModule } from './school-buses/school-buses.module';

@Module({
  imports: [SchoolBusesModule]
})
export class SchoolBusesModule {}
