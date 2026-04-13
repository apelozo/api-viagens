import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post()
  async create(@Body() createTourDto: CreateTourDto) {
    return await this.tourService.create(createTourDto);
  }

  @Get()
  async findAll() {
    return await this.tourService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tourService.findOne(id);
  }

  @Get('city/:cityId')
  async findByCity(@Param('cityId') cityId: string) {
    return await this.tourService.findByCity(cityId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return await this.tourService.update(id, updateTourDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tourService.remove(id);
  }
}