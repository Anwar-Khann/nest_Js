import { Module } from '@nestjs/common';
import { AffiliationsModule } from './affiliations/affiliations.module';

@Module({
  imports: [AffiliationsModule]
})
export class AffiliationsModule {}
