import { City } from '../../city/entities/city.entity';
export declare class Hotel {
    id: string;
    cityId: string;
    name: string;
    amountPaid: number;
    paymentMethod: string;
    currency: string;
    paymentStatus: string;
    freeCancellation: boolean;
    chain: string;
    checkInTime: string;
    address: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
    city: City;
}
