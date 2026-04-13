import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';
export declare class HotelService {
    private readonly hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    findOne(id: string): Promise<Hotel>;
    findByCity(cityId: string): Promise<Hotel[]>;
    update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel>;
    remove(id: string): Promise<void>;
}
