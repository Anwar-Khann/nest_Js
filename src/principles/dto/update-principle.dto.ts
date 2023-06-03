import { PartialType } from '@nestjs/mapped-types';
import { CreatePrincipleDto } from './create-principle.dto';

export class UpdatePrincipleDto extends PartialType(CreatePrincipleDto) {}
