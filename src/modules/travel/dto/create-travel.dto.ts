// create-travel.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
  
  // ADICIONE ESTA LINHA: Precisamos receber o ID do usuário que está criando a viagem
  @IsString()
  @IsNotEmpty()
  userId: string;   
}

