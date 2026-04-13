import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObservationService } from './observation.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';

@Controller('observation')
export class ObservationController {
  constructor(private readonly observationService: ObservationService) {}

  @Post()
  async create(@Body() createObservationDto: CreateObservationDto) {
    return await this.observationService.create(createObservationDto);
  }

  @Get()
  async findAll() {
    return await this.observationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.observationService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateObservationDto: UpdateObservationDto) {
    return await this.observationService.update(id, updateObservationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.observationService.remove(id);
  }
}