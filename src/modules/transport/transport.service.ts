import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { Transport } from './entities/transport.entity';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepository: Repository<Transport>,
  ) {}

  async create(createTransportDto: CreateTransportDto): Promise<Transport> {
    const transport = this.transportRepository.create(createTransportDto);
    return await this.transportRepository.save(transport);
  }

  async findAll(): Promise<Transport[]> {
    return await this.transportRepository.find();
  }

  async findOne(id: string): Promise<Transport> {
    const transport = await this.transportRepository.findOne({ where: { id } });
    if (!transport) {
      // Sintaxe corrigida com template literals (crases)
      throw new NotFoundException(`Transporte com ID ${id} não encontrado`);
    }
    return transport;
  }

  async findByViagem(viagemId: string): Promise<Transport[]> {
    return await this.transportRepository.find({ 
      where: { viagemId },
      // Adicionado: Ordenação cronológica pela data de partida
      order: { departureDate: 'ASC' } 
    });
  }

  async update(id: string, updateTransportDto: UpdateTransportDto): Promise<Transport> {
    const transport = await this.findOne(id);
    this.transportRepository.merge(transport, updateTransportDto);
    return await this.transportRepository.save(transport);
  }

  async remove(id: string): Promise<void> {
    const result = await this.transportRepository.delete(id);
    if (result.affected === 0) {
      // Sintaxe corrigida com template literals (crases)
      throw new NotFoundException(`Transporte com ID ${id} não encontrado`);
    }
  }
}