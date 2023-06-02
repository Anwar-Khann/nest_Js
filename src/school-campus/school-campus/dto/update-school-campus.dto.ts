import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolCampusDto } from './create-school-campus.dto';

export class UpdateSchoolCampusDto extends PartialType(CreateSchoolCampusDto) {}
