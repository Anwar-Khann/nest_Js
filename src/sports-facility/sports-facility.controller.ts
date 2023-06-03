import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportsFacilityService } from './sports-facility.service';
import { CreateSportsFacilityDto } from './dto/create-sports-facility.dto';
import { UpdateSportsFacilityDto } from './dto/update-sports-facility.dto';

@Controller('sports-facility')
export class SportsFacilityController {
  constructor(private readonly sportsFacilityService: SportsFacilityService) {}

  @Post()
  create(@Body() createSportsFacilityDto: CreateSportsFacilityDto) {
    return this.sportsFacilityService.create(createSportsFacilityDto);
  }

  @Get()
  findAll() {
    return this.sportsFacilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportsFacilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSportsFacilityDto: UpdateSportsFacilityDto) {
    return this.sportsFacilityService.update(+id, updateSportsFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportsFacilityService.remove(+id);
  }
}
