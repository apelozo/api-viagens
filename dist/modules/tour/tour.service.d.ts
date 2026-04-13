import { Repository } from 'typeorm';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
export declare class TourService {
    private readonly tourRepository;
    constructor(tourRepository: Repository<Tour>);
    create(createTourDto: CreateTourDto): Promise<Tour>;
    findAll(): Promise<Tour[]>;
    findOne(id: string): Promise<Tour>;
    findByCity(cityId: string): Promise<Tour[]>;
    update(id: string, updateTourDto: UpdateTourDto): Promise<Tour>;
    remove(id: string): Promise<void>;
}
