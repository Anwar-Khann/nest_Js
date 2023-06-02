import { Module } from '@nestjs/common';
import { ExamsDatesService } from './exams-dates.service';
import { ExamsDatesController } from './exams-dates.controller';

@Module({
  controllers: [ExamsDatesController],
  providers: [ExamsDatesService]
})
export class ExamsDatesModule {}
