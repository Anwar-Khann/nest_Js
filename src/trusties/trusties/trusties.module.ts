import { Module } from '@nestjs/common';
import { TrustiesService } from './trusties.service';
import { TrustiesController } from './trusties.controller';

@Module({
  controllers: [TrustiesController],
  providers: [TrustiesService]
})
export class TrustiesModule {}
