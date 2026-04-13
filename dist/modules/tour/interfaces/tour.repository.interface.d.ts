import { CreateTourDto } from '../dto/create-tour.dto';
import { UpdateTourDto } from '../dto/update-tour.dto';
import { Tour } from '../entities/tour.entity';
export interface TourRepositoryInterface {
    create(createTourDto: CreateTourDto): Promise<Tour>;
    findAll(): Promise<Tour[]>;
    findOne(id: string): Promise<Tour | null>;
    findByCityId(cityId: string): Promise<Tour[]>;
    update(id: string, updateTourDto: UpdateTourDto): Promise<Tour | null>;
    remove(id: string): Promise<void>;
}
