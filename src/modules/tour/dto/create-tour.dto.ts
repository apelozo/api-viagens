import { IsString, IsNotEmpty, IsUUID, IsNumber, IsOptional, IsEnum, IsBoolean, IsDateString } from 'class-validator';

export class CreateTourDto {
  @IsUUID()
  @IsNotEmpty()
  cityId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  amountPaid?: number;

  @IsOptional()
  @IsEnum(['dinheiro', 'cartao', 'transferencia'])
  paymentMethod?: 'dinheiro' | 'cartao' | 'transferencia';

  // ==========================================
  // NOVOS CAMPOS ADICIONADOS
  // ==========================================

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsBoolean()
  hasSchedule?: boolean;

  @IsOptional()
  @IsString()
  scheduledTime?: string;

  @IsOptional()
  @IsEnum(['Pago', 'A Pagar', 'Gratuito'])
  status?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsDateString() // Valida se a string enviada é uma data ISO 8601 válida (ex: "2026-04-15")
  scheduledDate?: string;
}