import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChancelorsService } from './chancelors.service';
import { CreateChancelorDto } from './dto/create-chancelor.dto';
import { UpdateChancelorDto } from './dto/update-chancelor.dto';

@Controller('chancelors')
export class ChancelorsController {
  constructor(private readonly chancelorsService: ChancelorsService) {}

  @Post()
  create(@Body() createChancelorDto: CreateChancelorDto) {
    return this.chancelorsService.create(createChancelorDto);
  }

  @Get()
  findAll() {
    return this.chancelorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chancelorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChancelorDto: UpdateChancelorDto) {
    return this.chancelorsService.update(+id, updateChancelorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chancelorsService.remove(+id);
  }
}
