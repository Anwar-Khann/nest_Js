import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamsDatesService } from './exams-dates.service';
import { CreateExamsDateDto } from './dto/create-exams-date.dto';
import { UpdateExamsDateDto } from './dto/update-exams-date.dto';

@Controller('exams-dates')
export class ExamsDatesController {
  constructor(private readonly examsDatesService: ExamsDatesService) {}

  @Post()
  create(@Body() createExamsDateDto: CreateExamsDateDto) {
    return this.examsDatesService.create(createExamsDateDto);
  }

  @Get()
  findAll() {
    return this.examsDatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsDatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamsDateDto: UpdateExamsDateDto) {
    return this.examsDatesService.update(+id, updateExamsDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsDatesService.remove(+id);
  }
}
