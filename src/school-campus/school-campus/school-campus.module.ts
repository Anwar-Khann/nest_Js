import { Module } from '@nestjs/common';
import { SchoolCampusService } from './school-campus.service';
import { SchoolCampusController } from './school-campus.controller';

@Module({
  controllers: [SchoolCampusController],
  providers: [SchoolCampusService]
})
export class SchoolCampusModule {}
