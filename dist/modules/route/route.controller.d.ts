import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
export declare class RouteController {
    private readonly routeService;
    constructor(routeService: RouteService);
    create(createRouteDto: CreateRouteDto): Promise<import("./entities/route.entity").Route>;
    findAll(): Promise<import("./entities/route.entity").Route[]>;
    findOne(id: string): Promise<import("./entities/route.entity").Route>;
    findByCity(cityId: string): Promise<import("./entities/route.entity").Route[]>;
    update(id: string, updateRouteDto: UpdateRouteDto): Promise<import("./entities/route.entity").Route>;
    remove(id: string): Promise<void>;
}
