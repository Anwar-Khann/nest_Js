import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolBusDto } from './create-school-bus.dto';

export class UpdateSchoolBusDto extends PartialType(CreateSchoolBusDto) {}
