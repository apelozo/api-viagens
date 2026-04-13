import { Transport } from '../../transport/entities/transport.entity';
export declare class TransportSeat {
    id: string;
    transportId: string;
    passengerName: string;
    seatNumber: string;
    seatClass: string;
    amountPaid: number;
    currency: string;
    transport: Transport;
}
