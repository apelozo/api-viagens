import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportService } from './transport.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { Transport } from './entities/transport.entity';

@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Post()
  create(@Body() createTransportDto: CreateTransportDto): Promise<Transport> {
    return this.transportService.create(createTransportDto);
  }

  @Get()
  findAll(): Promise<Transport[]> {
    return this.transportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transport> {
    return this.transportService.findOne(id);
  }

  /**
   * NOVO ENDPOINT: Busca transportes por Viagem.
   * Substitui as antigas buscas por cidade de origem/destino.
   */
  @Get('viagem/:viagemId')
  findByViagem(@Param('viagemId') viagemId: string): Promise<Transport[]> {
    return this.transportService.findByViagem(viagemId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateTransportDto: UpdateTransportDto
  ): Promise<Transport> {
    return this.transportService.update(id, updateTransportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.transportService.remove(id);
  }
}