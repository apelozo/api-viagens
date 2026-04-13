export declare class CreateTransportSeatDto {
    passengerName: string;
    seatNumber?: string;
    seatClass?: string;
    amountPaid?: number;
    currency?: 'USD' | 'BRL' | 'EUR' | 'GBP' | 'Milhas' | 'Gratuito';
}
export declare class CreateTransportDto {
    viagemId: string;
    type: 'voo' | 'trem' | 'onibus' | 'carro';
    departureDate?: string;
    arrivalDate?: string;
    amountPaid?: number;
    currency?: 'USD' | 'BRL' | 'EUR' | 'GBP' | 'Milhas';
    company?: string;
    identificationNumber?: string;
    reservationCode?: string;
    departureAirport?: string;
    arrivalAirport?: string;
    departureLocation?: string;
    arrivalLocation?: string;
    category?: string;
    status?: string;
    observations?: string;
    seats?: CreateTransportSeatDto[];
}
