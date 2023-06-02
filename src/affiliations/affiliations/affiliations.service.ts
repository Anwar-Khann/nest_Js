import { Injectable } from '@nestjs/common';
import { CreateAffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';

@Injectable()
export class AffiliationsService {
  create(createAffiliationDto: CreateAffiliationDto) {
    return 'This action adds a new affiliation';
  }

  findAll() {
    return `This action returns all affiliations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} affiliation`;
  }

  update(id: number, updateAffiliationDto: UpdateAffiliationDto) {
    return `This action updates a #${id} affiliation`;
  }

  remove(id: number) {
    return `This action removes a #${id} affiliation`;
  }
}
