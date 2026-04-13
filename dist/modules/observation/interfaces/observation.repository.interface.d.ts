import { CreateObservationDto } from '../dto/create-observation.dto';
import { UpdateObservationDto } from '../dto/update-observation.dto';
import { Observation } from '../entities/observation.entity';
export interface ObservationRepositoryInterface {
    create(createObservationDto: CreateObservationDto): Promise<Observation>;
    findAll(): Promise<Observation[]>;
    findOne(id: string): Promise<Observation | null>;
    findByTarget(targetType: string, targetId: string): Promise<Observation[]>;
    update(id: string, updateObservationDto: UpdateObservationDto): Promise<Observation | null>;
    remove(id: string): Promise<void>;
}
