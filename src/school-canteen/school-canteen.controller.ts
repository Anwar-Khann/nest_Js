import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolCanteenService } from './school-canteen.service';
import { CreateSchoolCanteenDto } from './dto/create-school-canteen.dto';
import { UpdateSchoolCanteenDto } from './dto/update-school-canteen.dto';

@Controller('school-canteen')
export class SchoolCanteenController {
  constructor(private readonly schoolCanteenService: SchoolCanteenService) {}

  @Post()
  create(@Body() createSchoolCanteenDto: CreateSchoolCanteenDto) {
    return this.schoolCanteenService.create(createSchoolCanteenDto);
  }

  @Get()
  findAll() {
    return this.schoolCanteenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolCanteenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolCanteenDto: UpdateSchoolCanteenDto) {
    return this.schoolCanteenService.update(+id, updateSchoolCanteenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolCanteenService.remove(+id);
  }
}
