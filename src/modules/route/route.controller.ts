import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    return await this.routeService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    return await this.routeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.routeService.findOne(id);
  }

  @Get('city/:cityId')
  async findByCity(@Param('cityId') cityId: string) {
    return await this.routeService.findByCity(cityId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return await this.routeService.update(id, updateRouteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.routeService.remove(id);
  }
}