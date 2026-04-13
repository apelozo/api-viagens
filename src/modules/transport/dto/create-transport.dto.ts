import { IsUUID, IsEnum, IsOptional, IsDateString, IsNumber, IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTransportSeatDto {
  @IsString()
  passengerName: string;

  @IsOptional()
  @IsString()
  seatNumber?: string;

  @IsOptional()
  @IsString()
  seatClass?: string;

  @IsOptional()
  @IsNumber()
  amountPaid?: number;

  @IsOptional()
  @IsEnum(['USD', 'BRL', 'EUR', 'GBP', 'Milhas', 'Gratuito'])
  currency?: 'USD' | 'BRL' | 'EUR' | 'GBP' | 'Milhas' | 'Gratuito';
}

export class CreateTransportDto {
  @IsUUID()
  viagemId: string;

  @IsEnum(['voo', 'trem', 'onibus', 'carro'])
  type: 'voo' | 'trem' | 'onibus' | 'carro';

  @IsOptional()
  @IsDateString()
  departureDate?: string;

  @IsOptional()
  @IsDateString()
  arrivalDate?: string;

  @IsOptional()
  @IsNumber()
  amountPaid?: number;

  @IsOptional()
  @IsEnum(['USD', 'BRL', 'EUR', 'GBP', 'Milhas'])
  currency?: 'USD' | 'BRL' | 'EUR' | 'GBP' | 'Milhas';

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  identificationNumber?: string;

  @IsOptional()
  @IsString()
  reservationCode?: string;

  @IsOptional()
  @IsString()
  departureAirport?: string;

  @IsOptional()
  @IsString()
  arrivalAirport?: string;

  @IsOptional()
  @IsString()
  departureLocation?: string;

  @IsOptional()
  @IsString()
  arrivalLocation?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTransportSeatDto)
  seats?: CreateTransportSeatDto[];
}