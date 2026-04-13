import { IsString, IsNotEmpty, IsUUID, IsOptional, IsEnum } from 'class-validator';

export class CreateRouteDto {
  @IsUUID()
  @IsNotEmpty()
  cityId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEnum(['cidade', 'passeio'])
  type?: 'cidade' | 'passeio';
}