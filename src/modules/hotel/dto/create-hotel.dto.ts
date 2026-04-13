import { IsString, IsNotEmpty, IsUUID, IsOptional, IsNumber, IsBoolean, IsEnum } from 'class-validator';

// Enums para validação baseados nas constraints do banco
export enum PaymentMethod {
  DINHEIRO = 'dinheiro',
  CARTAO = 'cartao',
  TRANSFERENCIA = 'transferencia',
}

export enum PaymentStatus {
  PAGO = 'PAGO',
  A_PAGAR = 'A_PAGAR',
}

export enum HotelChain {
  ALL = 'All',
  HILTON = 'Hilton',
  MARRIOT = 'Marriot',
  HYATT = 'Hyatt',
  OUTRAS = 'Outras',
}

export class CreateHotelDto {
  @IsUUID()
  @IsNotEmpty()
  cityId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsOptional()
  amountPaid?: number;

  @IsEnum(PaymentMethod)
  @IsOptional()
  paymentMethod?: PaymentMethod;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsEnum(PaymentStatus)
  @IsOptional()
  paymentStatus?: PaymentStatus;

  @IsBoolean()
  @IsOptional()
  freeCancellation?: boolean;

  @IsEnum(HotelChain)
  @IsOptional()
  chain?: HotelChain;

  @IsString()
  @IsOptional()
  checkInTime?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}