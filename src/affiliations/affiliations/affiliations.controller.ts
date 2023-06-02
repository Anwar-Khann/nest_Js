import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AffiliationsService } from './affiliations.service';
import { CreateAffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';

@Controller('affiliations')
export class AffiliationsController {
  constructor(private readonly affiliationsService: AffiliationsService) {}

  @Post()
  create(@Body() createAffiliationDto: CreateAffiliationDto) {
    return this.affiliationsService.create(createAffiliationDto);
  }

  @Get()
  findAll() {
    return this.affiliationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffiliationDto: UpdateAffiliationDto) {
    return this.affiliationsService.update(+id, updateAffiliationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliationsService.remove(+id);
  }
}
