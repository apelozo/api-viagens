export declare class CreateTourDto {
    cityId: string;
    name: string;
    amountPaid?: number;
    paymentMethod?: 'dinheiro' | 'cartao' | 'transferencia';
    latitude?: number;
    longitude?: number;
    hasSchedule?: boolean;
    scheduledTime?: string;
    status?: string;
    observations?: string;
    address?: string;
    scheduledDate?: string;
}
