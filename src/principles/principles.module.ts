import { Module } from '@nestjs/common';
import { PrinciplesService } from './principles.service';
import { PrinciplesController } from './principles.controller';

@Module({
  controllers: [PrinciplesController],
  providers: [PrinciplesService]
})
export class PrinciplesModule {}
