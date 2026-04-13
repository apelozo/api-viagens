import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: CreateRestaurantDto): Promise<import("./entities/restaurant.entity").Restaurant>;
    findAll(cidade_id?: string): Promise<import("./entities/restaurant.entity").Restaurant[]>;
    findOne(id: string): Promise<import("./entities/restaurant.entity").Restaurant>;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<import("./entities/restaurant.entity").Restaurant>;
    remove(id: string): Promise<void>;
}
