import { Injectable } from '@nestjs/common';
import { CreateSchoolCampusDto } from './dto/create-school-campus.dto';
import { UpdateSchoolCampusDto } from './dto/update-school-campus.dto';

@Injectable()
export class SchoolCampusService {
  create(createSchoolCampusDto: CreateSchoolCampusDto) {
    return 'This action adds a new schoolCampus';
  }

  findAll() {
    return `This action returns all schoolCampus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolCampus`;
  }

  update(id: number, updateSchoolCampusDto: UpdateSchoolCampusDto) {
    return `This action updates a #${id} schoolCampus`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolCampus`;
  }
}
