import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    return await this.hotelService.create(createHotelDto);
  }

  @Get()
  async findAll() {
    return await this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelService.findOne(id);
  }

  @Get('city/:cityId')
  async findByCity(@Param('cityId') cityId: string) {
    return await this.hotelService.findByCity(cityId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return await this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hotelService.remove(id);
  }
}