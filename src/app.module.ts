import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminsModule } from './admins/admins.module';
import { CampusModule } from './campus/campus.module';
import { BranchesModule } from './branches/branches.module';
import { SchoolCanteenModule } from './school-canteen/school-canteen.module';
import { SportsFacilityModule } from './sports-facility/sports-facility.module';
import { BatchesModule } from './batches/batches.module';
import { CanteenLedgerModule } from './canteen-ledger/canteen-ledger.module';
import { PrinciplesModule } from './principles/principles.module';
import { AffiliationsModule } from './affiliations/affiliations.module';


@Module({
  imports: [ UserModule, AdminsModule, CampusModule, BranchesModule, SchoolCanteenModule, SportsFacilityModule, BatchesModule, CanteenLedgerModule, PrinciplesModule, AffiliationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
