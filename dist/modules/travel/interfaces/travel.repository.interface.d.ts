import { CreateTravelDto } from '../dto/create-travel.dto';
import { UpdateTravelDto } from '../dto/update-travel.dto';
import { Travel } from '../entities/travel.entity';
export interface TravelRepositoryInterface {
    create(createTravelDto: CreateTravelDto): Promise<Travel>;
    findAll(): Promise<Travel[]>;
    findOne(id: string): Promise<Travel | null>;
    update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel | null>;
    remove(id: string): Promise<void>;
}
