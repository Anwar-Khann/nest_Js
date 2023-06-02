import { PartialType } from '@nestjs/mapped-types';
import { CreateChancelorDto } from './create-chancelor.dto';

export class UpdateChancelorDto extends PartialType(CreateChancelorDto) {}
