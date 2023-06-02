import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolCampusService } from './school-campus.service';
import { CreateSchoolCampusDto } from './dto/create-school-campus.dto';
import { UpdateSchoolCampusDto } from './dto/update-school-campus.dto';

@Controller('school-campus')
export class SchoolCampusController {
  constructor(private readonly schoolCampusService: SchoolCampusService) {}

  @Post()
  create(@Body() createSchoolCampusDto: CreateSchoolCampusDto) {
    return this.schoolCampusService.create(createSchoolCampusDto);
  }

  @Get()
  findAll() {
    return this.schoolCampusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolCampusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolCampusDto: UpdateSchoolCampusDto) {
    return this.schoolCampusService.update(+id, updateSchoolCampusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolCampusService.remove(+id);
  }
}
