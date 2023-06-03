import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolCanteenDto } from './create-school-canteen.dto';

export class UpdateSchoolCanteenDto extends PartialType(CreateSchoolCanteenDto) {}
