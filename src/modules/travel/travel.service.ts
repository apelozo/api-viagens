import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Travel } from './entities/travel.entity';
import { User } from '../users/entities/user.entity'; // Importação da entidade User

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(Travel)
    private readonly travelRepository: Repository<Travel>,
    
    // Injetando o repositório de User para podermos buscar o usuário
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    // 1. Busca o usuário no banco de dados usando o userId que veio do frontend
    const user = await this.userRepository.findOne({ 
      where: { id: createTravelDto.userId } 
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${createTravelDto.userId} não encontrado`);
    }

    // 2. Cria a instância da viagem
    const travel = this.travelRepository.create(createTravelDto);

    // 3. Faz o vínculo: adiciona o usuário na lista de usuários da viagem
    travel.users = [user];

    // 4. Salva a viagem. O TypeORM vai salvar na tabela 'viagem' e na tabela de relacionamento automaticamente
    return await this.travelRepository.save(travel);
  }

  async findAll(): Promise<Travel[]> {
    return await this.travelRepository.find({ relations: ['cities'] });
  }

  async findByUser(userId: string): Promise<Travel[]> {
    return this.travelRepository.find({
      where: {
        users: { id: userId }
      },
      order: { startDate: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Travel> {
    const travel = await this.travelRepository.findOne({ 
      where: { id },
      relations: ['cities'] 
    });

    if (!travel) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }

    return travel;
  }

  async update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel> {
    const travel = await this.findOne(id);
    this.travelRepository.merge(travel, updateTravelDto);
    return await this.travelRepository.save(travel);
  }

  async remove(id: string): Promise<void> {
    const result = await this.travelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
  }
}