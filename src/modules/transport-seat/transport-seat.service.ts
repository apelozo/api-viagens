import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportSeatDto } from './dto/create-transport-seat.dto';
import { UpdateTransportSeatDto } from './dto/update-transport-seat.dto';
import { TransportSeat } from './entities/transport-seat.entity';

@Injectable()
export class TransportSeatService {
  constructor(
    @InjectRepository(TransportSeat)
    private readonly seatRepository: Repository<TransportSeat>,
  ) {}

  async create(createTransportSeatDto: CreateTransportSeatDto): Promise<TransportSeat> {
    const seat = this.seatRepository.create(createTransportSeatDto);
    return await this.seatRepository.save(seat);
  }

  // Busca todos os assentos de um transporte específico
  async findAllByTransport(transportId: string): Promise<TransportSeat[]> {
    return await this.seatRepository.find({ where: { transportId } });
  }

  async findOne(id: string): Promise<TransportSeat> {
    const seat = await this.seatRepository.findOne({ where: { id } });
    if (!seat) {
      throw new NotFoundException(`Assento com ID ${id} não encontrado`);
    }
    return seat;
  }

  async update(id: string, updateTransportSeatDto: UpdateTransportSeatDto): Promise<TransportSeat> {
    const seat = await this.findOne(id);
    this.seatRepository.merge(seat, updateTransportSeatDto);
    return await this.seatRepository.save(seat);
  }

  async remove(id: string): Promise<void> {
    const result = await this.seatRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Assento com ID ${id} não encontrado`);
    }
  }
}