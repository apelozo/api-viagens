import { TransportService } from './transport.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { Transport } from './entities/transport.entity';
export declare class TransportController {
    private readonly transportService;
    constructor(transportService: TransportService);
    create(createTransportDto: CreateTransportDto): Promise<Transport>;
    findAll(): Promise<Transport[]>;
    findOne(id: string): Promise<Transport>;
    findByViagem(viagemId: string): Promise<Transport[]>;
    update(id: string, updateTransportDto: UpdateTransportDto): Promise<Transport>;
    remove(id: string): Promise<void>;
}
