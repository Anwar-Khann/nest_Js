import { Module } from '@nestjs/common';
import { TrustiesModule } from './trusties/trusties.module';

@Module({
  imports: [TrustiesModule]
})
export class TrustiesModule {}
