import { Repository } from 'typeorm';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { Observation } from './entities/observation.entity';
export declare class ObservationService {
    private readonly observationRepository;
    constructor(observationRepository: Repository<Observation>);
    create(createObservationDto: CreateObservationDto): Promise<Observation>;
    findAll(): Promise<Observation[]>;
    findOne(id: string): Promise<Observation>;
    update(id: string, updateObservationDto: UpdateObservationDto): Promise<Observation>;
    remove(id: string): Promise<void>;
}
