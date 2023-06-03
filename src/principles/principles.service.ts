import { Injectable } from '@nestjs/common';
import { CreatePrincipleDto } from './dto/create-principle.dto';
import { UpdatePrincipleDto } from './dto/update-principle.dto';

@Injectable()
export class PrinciplesService {
  create(createPrincipleDto: CreatePrincipleDto) {
    return 'This action adds a new principle';
  }

  findAll() {
    return `This action returns all principles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} principle`;
  }

  update(id: number, updatePrincipleDto: UpdatePrincipleDto) {
    return `This action updates a #${id} principle`;
  }

  remove(id: number) {
    return `This action removes a #${id} principle`;
  }
}
