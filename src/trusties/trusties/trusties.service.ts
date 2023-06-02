import { Injectable } from '@nestjs/common';
import { CreateTrustyDto } from './dto/create-trusty.dto';
import { UpdateTrustyDto } from './dto/update-trusty.dto';

@Injectable()
export class TrustiesService {
  create(createTrustyDto: CreateTrustyDto) {
    return 'This action adds a new trusty';
  }

  findAll() {
    return `This action returns all trusties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trusty`;
  }

  update(id: number, updateTrustyDto: UpdateTrustyDto) {
    return `This action updates a #${id} trusty`;
  }

  remove(id: number) {
    return `This action removes a #${id} trusty`;
  }
}
