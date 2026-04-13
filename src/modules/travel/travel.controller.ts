// travel.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  async create(@Body() createTravelDto: CreateTravelDto) {
    return await this.travelService.create(createTravelDto);
  }

  @Get()
  async findAll() {
    return await this.travelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.travelService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTravelDto: UpdateTravelDto) {
    return await this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.travelService.remove(id);
  }
  
  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.travelService.findByUser(userId);
  }  
  
}