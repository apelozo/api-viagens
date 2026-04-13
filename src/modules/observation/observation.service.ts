import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { Observation } from './entities/observation.entity';

@Injectable()
export class ObservationService {
  constructor(
    @InjectRepository(Observation)
    private readonly observationRepository: Repository<Observation>,
  ) {}

  async create(createObservationDto: CreateObservationDto): Promise<Observation> {
    // Validação da regra de negócio: Apenas 1 ID de relacionamento deve ser preenchido
    const ids = [
      createObservationDto.travelId,
      createObservationDto.cityId,
      createObservationDto.hotelId,
      createObservationDto.restaurantId,
      createObservationDto.tourId,
      createObservationDto.transportId,
      createObservationDto.routeId,
    ];
    
    const filledIdsCount = ids.filter(id => id != null).length;
    
    if (filledIdsCount !== 1) {
      throw new BadRequestException('A observação deve estar vinculada a exatamente UMA entidade.');
    }

    const observation = this.observationRepository.create(createObservationDto);
    return await this.observationRepository.save(observation);
  }

  async findAll(): Promise<Observation[]> {
    return await this.observationRepository.find();
  }

  async findOne(id: string): Promise<Observation> {
    const observation = await this.observationRepository.findOne({ where: { id } });
    if (!observation) {
      throw new NotFoundException(`Observation with ID ${id} not found`);
    }
    return observation;
  }

  async update(id: string, updateObservationDto: UpdateObservationDto): Promise<Observation> {
    const observation = await this.findOne(id);
    this.observationRepository.merge(observation, updateObservationDto);
    return await this.observationRepository.save(observation);
  }

  async remove(id: string): Promise<void> {
    const result = await this.observationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Observation with ID ${id} not found`);
    }
  }
}