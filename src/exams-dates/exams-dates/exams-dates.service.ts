import { Injectable } from '@nestjs/common';
import { CreateExamsDateDto } from './dto/create-exams-date.dto';
import { UpdateExamsDateDto } from './dto/update-exams-date.dto';

@Injectable()
export class ExamsDatesService {
  create(createExamsDateDto: CreateExamsDateDto) {
    return 'This action adds a new examsDate';
  }

  findAll() {
    return `This action returns all examsDates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examsDate`;
  }

  update(id: number, updateExamsDateDto: UpdateExamsDateDto) {
    return `This action updates a #${id} examsDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} examsDate`;
  }
}
