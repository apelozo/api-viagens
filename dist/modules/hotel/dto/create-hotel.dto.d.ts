export declare enum PaymentMethod {
    DINHEIRO = "dinheiro",
    CARTAO = "cartao",
    TRANSFERENCIA = "transferencia"
}
export declare enum PaymentStatus {
    PAGO = "PAGO",
    A_PAGAR = "A_PAGAR"
}
export declare enum HotelChain {
    ALL = "All",
    HILTON = "Hilton",
    MARRIOT = "Marriot",
    HYATT = "Hyatt",
    OUTRAS = "Outras"
}
export declare class CreateHotelDto {
    cityId: string;
    name: string;
    amountPaid?: number;
    paymentMethod?: PaymentMethod;
    currency?: string;
    paymentStatus?: PaymentStatus;
    freeCancellation?: boolean;
    chain?: HotelChain;
    checkInTime?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
}
