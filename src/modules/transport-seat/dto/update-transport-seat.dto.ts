import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportSeatDto } from './create-transport-seat.dto';

export class UpdateTransportSeatDto extends PartialType(CreateTransportSeatDto) {}