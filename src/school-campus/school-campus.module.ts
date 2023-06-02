import { Module } from '@nestjs/common';
import { SchoolCampusModule } from './school-campus/school-campus.module';

@Module({
  imports: [SchoolCampusModule]
})
export class SchoolCampusModule {}
