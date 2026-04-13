import { TransportSeat } from '../../transport-seat/entities/transport-seat.entity';
export declare class Transport {
    id: string;
    viagemId: string;
    type: 'voo' | 'trem' | 'onibus' | 'carro';
    company: string;
    identificationNumber: string;
    reservationCode: string;
    departureAirport: string;
    arrivalAirport: string;
    category: string;
    status: string;
    observations: string;
    departureLocation: string;
    arrivalLocation: string;
    departureDate: Date;
    arrivalDate: Date;
    amountPaid: number;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
    seats: TransportSeat[];
}
