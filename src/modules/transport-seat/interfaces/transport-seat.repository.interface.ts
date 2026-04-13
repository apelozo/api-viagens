import { CreateTransportSeatDto } from '../dto/create-transport-seat.dto';
import { UpdateTransportSeatDto } from '../dto/update-transport-seat.dto';
import { TransportSeat } from '../entities/transport-seat.entity';

/**
 * Contrato do repositório de assentos de transporte.
 * Mantém o módulo desacoplado da implementação de persistência.
 */
export interface TransportSeatRepositoryInterface {
  /**
   * Cria um assento.
   */
  create(createTransportSeatDto: CreateTransportSeatDto): Promise<TransportSeat>;

  /**
   * Lista todos os assentos.
   */
  findAll(): Promise<TransportSeat[]>;

  /**
   * Busca um assento pelo ID.
   */
  findOne(id: string): Promise<TransportSeat | null>;

  /**
   * Busca assentos por transporte.
   */
  findByTransportId(transportId: string): Promise<TransportSeat[]>;

  /**
   * Atualiza um assento.
   */
  update(id: string, updateTransportSeatDto: UpdateTransportSeatDto): Promise<TransportSeat | null>;

  /**
   * Remove um assento.
   */
  remove(id: string): Promise<void>;
}