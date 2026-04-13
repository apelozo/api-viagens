import { Repository } from 'typeorm';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Travel } from './entities/travel.entity';
import { User } from '../users/entities/user.entity';
export declare class TravelService {
    private readonly travelRepository;
    private readonly userRepository;
    constructor(travelRepository: Repository<Travel>, userRepository: Repository<User>);
    create(createTravelDto: CreateTravelDto): Promise<Travel>;
    findAll(): Promise<Travel[]>;
    findByUser(userId: string): Promise<Travel[]>;
    findOne(id: string): Promise<Travel>;
    update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel>;
    remove(id: string): Promise<void>;
}
