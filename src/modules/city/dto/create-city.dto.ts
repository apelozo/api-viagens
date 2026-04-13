// create-city.dto.ts
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCityDto {
  @IsUUID()
  @IsNotEmpty()
  travelId: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}