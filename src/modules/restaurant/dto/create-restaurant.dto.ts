import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max } from 'class-validator';

export class CreateRestaurantDto {
  @IsUUID()
  cidade_id: string;

  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  tipo_comida?: string;

  @IsOptional()
  @IsNumber()
  preco_medio?: number;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsOptional()
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude?: number;

  @IsOptional()
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude?: number;

  @IsOptional()
  @IsBoolean()
  reservado?: boolean;

  @IsOptional()
  @IsString()
  ponto_referencia?: string;
}