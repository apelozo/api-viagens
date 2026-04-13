import { CreateHotelDto } from '../dto/create-hotel.dto';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
import { Hotel } from '../entities/hotel.entity';
export interface HotelRepositoryInterface {
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    findOne(id: string): Promise<Hotel | null>;
    findByCityId(cityId: string): Promise<Hotel[]>;
    update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel | null>;
    remove(id: string): Promise<void>;
}
