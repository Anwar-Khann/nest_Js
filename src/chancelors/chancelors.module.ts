import { Module } from '@nestjs/common';
import { ChancelorsModule } from './chancelors/chancelors.module';

@Module({
  imports: [ChancelorsModule]
})
export class ChancelorsModule {}
