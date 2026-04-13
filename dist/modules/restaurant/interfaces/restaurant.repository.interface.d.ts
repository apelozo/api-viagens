import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';
export interface RestaurantRepositoryInterface {
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findOne(id: string): Promise<Restaurant | null>;
    findByCityId(cityId: string): Promise<Restaurant[]>;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant | null>;
    remove(id: string): Promise<void>;
}
