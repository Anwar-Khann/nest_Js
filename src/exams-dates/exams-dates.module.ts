import { Module } from '@nestjs/common';
import { ExamsDatesModule } from './exams-dates/exams-dates.module';

@Module({
  imports: [ExamsDatesModule]
})
export class ExamsDatesModule {}
