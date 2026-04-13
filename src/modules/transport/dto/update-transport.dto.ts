import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportDto } from './create-transport.dto';

/**
 * DTO para atualização de um Transporte.
 * Herda todas as propriedades do CreateTransportDto, tornando-as opcionais.
 */
export class UpdateTransportDto extends PartialType(CreateTransportDto) {}