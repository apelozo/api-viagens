import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateObservationDto {
  @IsOptional()
  @IsUUID()
  travelId?: string;

  @IsOptional()
  @IsUUID()
  cityId?: string;

  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @IsOptional()
  @IsUUID()
  restaurantId?: string;

  @IsOptional()
  @IsUUID()
  tourId?: string;

  @IsOptional()
  @IsUUID()
  transportId?: string;

  @IsOptional()
  @IsUUID()
  routeId?: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}