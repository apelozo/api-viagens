import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportSeatService } from './transport-seat.service';
import { CreateTransportSeatDto } from './dto/create-transport-seat.dto';
import { UpdateTransportSeatDto } from './dto/update-transport-seat.dto';
import { TransportSeat } from './entities/transport-seat.entity';

@Controller('transport-seat')
export class TransportSeatController {
  constructor(private readonly seatService: TransportSeatService) {}

  @Post()
  create(@Body() createTransportSeatDto: CreateTransportSeatDto): Promise<TransportSeat> {
    return this.seatService.create(createTransportSeatDto);
  }

  @Get('transport/:transportId')
  findAllByTransport(@Param('transportId') transportId: string): Promise<TransportSeat[]> {
    return this.seatService.findAllByTransport(transportId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TransportSeat> {
    return this.seatService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateTransportSeatDto: UpdateTransportSeatDto
  ): Promise<TransportSeat> {
    return this.seatService.update(id, updateTransportSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.seatService.remove(id);
  }
}