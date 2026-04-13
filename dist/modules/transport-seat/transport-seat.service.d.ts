import { Repository } from 'typeorm';
import { CreateTransportSeatDto } from './dto/create-transport-seat.dto';
import { UpdateTransportSeatDto } from './dto/update-transport-seat.dto';
import { TransportSeat } from './entities/transport-seat.entity';
export declare class TransportSeatService {
    private readonly seatRepository;
    constructor(seatRepository: Repository<TransportSeat>);
    create(createTransportSeatDto: CreateTransportSeatDto): Promise<TransportSeat>;
    findAllByTransport(transportId: string): Promise<TransportSeat[]>;
    findOne(id: string): Promise<TransportSeat>;
    update(id: string, updateTransportSeatDto: UpdateTransportSeatDto): Promise<TransportSeat>;
    remove(id: string): Promise<void>;
}
