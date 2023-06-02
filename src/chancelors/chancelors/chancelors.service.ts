import { Injectable } from '@nestjs/common';
import { CreateChancelorDto } from './dto/create-chancelor.dto';
import { UpdateChancelorDto } from './dto/update-chancelor.dto';

@Injectable()
export class ChancelorsService {
  create(createChancelorDto: CreateChancelorDto) {
    return 'This action adds a new chancelor';
  }

  findAll() {
    return `This action returns all chancelors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chancelor`;
  }

  update(id: number, updateChancelorDto: UpdateChancelorDto) {
    return `This action updates a #${id} chancelor`;
  }

  remove(id: number) {
    return `This action removes a #${id} chancelor`;
  }
}
