import { PartialType } from '@nestjs/mapped-types';
import { CreateSportsFacilityDto } from './create-sports-facility.dto';

export class UpdateSportsFacilityDto extends PartialType(CreateSportsFacilityDto) {}
