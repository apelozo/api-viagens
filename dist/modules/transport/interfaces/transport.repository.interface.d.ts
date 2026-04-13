import { CreateTransportDto } from '../dto/create-transport.dto';
import { UpdateTransportDto } from '../dto/update-transport.dto';
import { Transport } from '../entities/transport.entity';
export interface TransportRepositoryInterface {
    create(createTransportDto: CreateTransportDto): Promise<Transport>;
    findAll(): Promise<Transport[]>;
    findOne(id: string): Promise<Transport | null>;
    findByOriginCityId(cityOriginId: string): Promise<Transport[]>;
    findByDestinationCityId(cityDestinationId: string): Promise<Transport[]>;
    update(id: string, updateTransportDto: UpdateTransportDto): Promise<Transport | null>;
    remove(id: string): Promise<void>;
}
