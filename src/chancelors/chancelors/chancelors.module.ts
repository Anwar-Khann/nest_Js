import { Module } from '@nestjs/common';
import { ChancelorsService } from './chancelors.service';
import { ChancelorsController } from './chancelors.controller';

@Module({
  controllers: [ChancelorsController],
  providers: [ChancelorsService]
})
export class ChancelorsModule {}
