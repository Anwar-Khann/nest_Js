import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TeachersModule } from './teachers/teachers.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SchoolBusesModule } from './school-buses/school-buses.module';
import { SchoolCampusModule } from './school-campus/school-campus.module';
import { CanteenProductsModule } from './canteen-products/canteen-products.module';
import { ExamsDatesModule } from './exams-dates/exams-dates.module';
import { ChancelorsModule } from './chancelors/chancelors.module';
import { TrustiesModule } from './trusties/trusties.module';
import { AffiliationsModule } from './affiliations/affiliations.module';

@Module({
  imports: [UserModule, TeachersModule, SubjectsModule, SchoolBusesModule, SchoolCampusModule, CanteenProductsModule, ExamsDatesModule, ChancelorsModule, TrustiesModule, AffiliationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
