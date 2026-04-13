import { ObservationService } from './observation.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
export declare class ObservationController {
    private readonly observationService;
    constructor(observationService: ObservationService);
    create(createObservationDto: CreateObservationDto): Promise<import("./entities/observation.entity").Observation>;
    findAll(): Promise<import("./entities/observation.entity").Observation[]>;
    findOne(id: string): Promise<import("./entities/observation.entity").Observation>;
    update(id: string, updateObservationDto: UpdateObservationDto): Promise<import("./entities/observation.entity").Observation>;
    remove(id: string): Promise<void>;
}
