import { Injectable } from '@nestjs/common';
import { CreateSportsFacilityDto } from './dto/create-sports-facility.dto';
import { UpdateSportsFacilityDto } from './dto/update-sports-facility.dto';

@Injectable()
export class SportsFacilityService {
  create(createSportsFacilityDto: CreateSportsFacilityDto) {
    return 'This action adds a new sportsFacility';
  }

  findAll() {
    return `This action returns all sportsFacility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportsFacility`;
  }

  update(id: number, updateSportsFacilityDto: UpdateSportsFacilityDto) {
    return `This action updates a #${id} sportsFacility`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportsFacility`;
  }
}
