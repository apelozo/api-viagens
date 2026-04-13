import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find({ relations: ['travel'] });
  }

  async findOne(id: string): Promise<City> {
    const city = await this.cityRepository.findOne({ 
      where: { id },
      relations: ['travel']
    });
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }

  async findByTravel(travelId: string): Promise<City[]> {
    return await this.cityRepository.find({ where: { travelId } });
  }

  async update(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    this.cityRepository.merge(city, updateCityDto);
    return await this.cityRepository.save(city);
  }

  async remove(id: string): Promise<void> {
    const result = await this.cityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
  }
}