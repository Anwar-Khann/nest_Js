import { Module } from '@nestjs/common';
import { SportsFacilityService } from './sports-facility.service';
import { SportsFacilityController } from './sports-facility.controller';

@Module({
  controllers: [SportsFacilityController],
  providers: [SportsFacilityService]
})
export class SportsFacilityModule {}
