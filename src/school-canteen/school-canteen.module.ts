import { Module } from '@nestjs/common';
import { SchoolCanteenService } from './school-canteen.service';
import { SchoolCanteenController } from './school-canteen.controller';

@Module({
  controllers: [SchoolCanteenController],
  providers: [SchoolCanteenService]
})
export class SchoolCanteenModule {}
