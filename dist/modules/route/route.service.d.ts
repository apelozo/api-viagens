import { Repository } from 'typeorm';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';
export declare class RouteService {
    private readonly routeRepository;
    constructor(routeRepository: Repository<Route>);
    create(createRouteDto: CreateRouteDto): Promise<Route>;
    findAll(): Promise<Route[]>;
    findOne(id: string): Promise<Route>;
    findByCity(cityId: string): Promise<Route[]>;
    update(id: string, updateRouteDto: UpdateRouteDto): Promise<Route>;
    remove(id: string): Promise<void>;
}
