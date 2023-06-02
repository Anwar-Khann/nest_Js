import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolBusesService } from './school-buses.service';
import { CreateSchoolBusDto } from './dto/create-school-bus.dto';
import { UpdateSchoolBusDto } from './dto/update-school-bus.dto';

@Controller('school-buses')
export class SchoolBusesController {
  constructor(private readonly schoolBusesService: SchoolBusesService) {}

  @Post()
  create(@Body() createSchoolBusDto: CreateSchoolBusDto) {
    return this.schoolBusesService.create(createSchoolBusDto);
  }

  @Get()
  findAll() {
    return this.schoolBusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolBusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolBusDto: UpdateSchoolBusDto) {
    return this.schoolBusesService.update(+id, updateSchoolBusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolBusesService.remove(+id);
  }
}
