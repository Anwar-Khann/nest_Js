import { Injectable } from '@nestjs/common';
import { CreateSchoolBusDto } from './dto/create-school-bus.dto';
import { UpdateSchoolBusDto } from './dto/update-school-bus.dto';

@Injectable()
export class SchoolBusesService {
  create(createSchoolBusDto: CreateSchoolBusDto) {
    return 'This action adds a new schoolBus';
  }

  findAll() {
    return `This action returns all schoolBuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolBus`;
  }

  update(id: number, updateSchoolBusDto: UpdateSchoolBusDto) {
    return `This action updates a #${id} schoolBus`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolBus`;
  }
}
