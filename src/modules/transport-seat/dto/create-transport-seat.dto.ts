import { IsUUID, IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';

export class CreateTransportSeatDto {
  @IsUUID()
  transportId: string;

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