import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';

@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private readonly tourRepository: Repository<Tour>,
  ) {}

  async create(createTourDto: CreateTourDto): Promise<Tour> {
    const tour = this.tourRepository.create(createTourDto);
    return await this.tourRepository.save(tour);
  }

  async findAll(): Promise<Tour[]> {
    return await this.tourRepository.find({ relations: ['city'] });
  }

  async findOne(id: string): Promise<Tour> {
    const tour = await this.tourRepository.findOne({ 
      where: { id },
      relations: ['city']
    });

    if (!tour) {
      // CORREÇÃO: Adicionadas as crases (backticks) para a string
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
    return tour;
  }

  async findByCity(cityId: string): Promise<Tour[]> {
    return await this.tourRepository.find({ where: { cityId } });
  }

  async update(id: string, updateTourDto: UpdateTourDto): Promise<Tour> {
    const tour = await this.findOne(id);
    this.tourRepository.merge(tour, updateTourDto);
    return await this.tourRepository.save(tour);
  }

  async remove(id: string): Promise<void> {
    const result = await this.tourRepository.delete(id);
    if (result.affected === 0) {
      // CORREÇÃO: Adicionadas as crases (backticks) para a string
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
  }
}