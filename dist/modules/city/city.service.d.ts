import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
export declare class CityService {
    private readonly cityRepository;
    constructor(cityRepository: Repository<City>);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findOne(id: string): Promise<City>;
    findByTravel(travelId: string): Promise<City[]>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: string): Promise<void>;
}
