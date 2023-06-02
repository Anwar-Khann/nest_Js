import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrustiesService } from './trusties.service';
import { CreateTrustyDto } from './dto/create-trusty.dto';
import { UpdateTrustyDto } from './dto/update-trusty.dto';

@Controller('trusties')
export class TrustiesController {
  constructor(private readonly trustiesService: TrustiesService) {}

  @Post()
  create(@Body() createTrustyDto: CreateTrustyDto) {
    return this.trustiesService.create(createTrustyDto);
  }

  @Get()
  findAll() {
    return this.trustiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trustiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrustyDto: UpdateTrustyDto) {
    return this.trustiesService.update(+id, updateTrustyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trustiesService.remove(+id);
  }
}
