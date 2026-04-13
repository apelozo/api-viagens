import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): Promise<import("./entities/city.entity").City>;
    findAll(): Promise<import("./entities/city.entity").City[]>;
    findOne(id: string): Promise<import("./entities/city.entity").City>;
    findByTravel(travelId: string): Promise<import("./entities/city.entity").City[]>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<import("./entities/city.entity").City>;
    remove(id: string): Promise<void>;
}
