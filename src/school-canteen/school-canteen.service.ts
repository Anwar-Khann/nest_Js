import { Injectable } from '@nestjs/common';
import { CreateSchoolCanteenDto } from './dto/create-school-canteen.dto';
import { UpdateSchoolCanteenDto } from './dto/update-school-canteen.dto';

@Injectable()
export class SchoolCanteenService {
  create(createSchoolCanteenDto: CreateSchoolCanteenDto) {
    return 'This action adds a new schoolCanteen';
  }

  findAll() {
    return `This action returns all schoolCanteen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolCanteen`;
  }

  update(id: number, updateSchoolCanteenDto: UpdateSchoolCanteenDto) {
    return `This action updates a #${id} schoolCanteen`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolCanteen`;
  }
}
