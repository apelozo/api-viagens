import { CreateTransportSeatDto } from '../dto/create-transport-seat.dto';
import { UpdateTransportSeatDto } from '../dto/update-transport-seat.dto';
import { TransportSeat } from '../entities/transport-seat.entity';
export interface TransportSeatRepositoryInterface {
    create(createTransportSeatDto: CreateTransportSeatDto): Promise<TransportSeat>;
    findAll(): Promise<TransportSeat[]>;
    findOne(id: string): Promise<TransportSeat | null>;
    findByTransportId(transportId: string): Promise<TransportSeat[]>;
    update(id: string, updateTransportSeatDto: UpdateTransportSeatDto): Promise<TransportSeat | null>;
    remove(id: string): Promise<void>;
}
