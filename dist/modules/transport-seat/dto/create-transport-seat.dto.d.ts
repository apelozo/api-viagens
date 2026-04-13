export declare class CreateTransportSeatDto {
    transportId: string;
    passengerName: string;
    seatNumber?: string;
    seatClass?: string;
    amountPaid?: number;
    currency?: 'USD' | 'BRL' | 'EUR' | 'GBP' | 'Milhas' | 'Gratuito';
}
