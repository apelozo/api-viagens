import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { City } from '../entities/city.entity';
export interface CityRepositoryInterface {
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findOne(id: string): Promise<City | null>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<City | null>;
    remove(id: string): Promise<void>;
}
