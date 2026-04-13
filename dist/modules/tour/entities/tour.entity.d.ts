import { City } from '../../city/entities/city.entity';
export declare class Tour {
    id: string;
    cityId: string;
    name: string;
    amountPaid: number;
    paymentMethod: 'dinheiro' | 'cartao' | 'transferencia';
    latitude: number;
    longitude: number;
    hasSchedule: boolean;
    scheduledTime: string;
    status: string;
    observations: string;
    address: string;
    scheduledDate: Date;
    createdAt: Date;
    updatedAt: Date;
    city: City;
}
