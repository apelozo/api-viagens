import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    create(createTravelDto: CreateTravelDto): Promise<import("./entities/travel.entity").Travel>;
    findAll(): Promise<import("./entities/travel.entity").Travel[]>;
    findOne(id: string): Promise<import("./entities/travel.entity").Travel>;
    update(id: string, updateTravelDto: UpdateTravelDto): Promise<import("./entities/travel.entity").Travel>;
    remove(id: string): Promise<void>;
    findByUser(userId: string): Promise<import("./entities/travel.entity").Travel[]>;
}
