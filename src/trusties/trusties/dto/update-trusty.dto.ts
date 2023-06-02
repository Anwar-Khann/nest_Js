import { PartialType } from '@nestjs/mapped-types';
import { CreateTrustyDto } from './create-trusty.dto';

export class UpdateTrustyDto extends PartialType(CreateTrustyDto) {}
