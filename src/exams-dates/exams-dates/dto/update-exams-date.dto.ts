import { PartialType } from '@nestjs/mapped-types';
import { CreateExamsDateDto } from './create-exams-date.dto';

export class UpdateExamsDateDto extends PartialType(CreateExamsDateDto) {}
