import { CreateTransportDto } from '../dto/create-transport.dto';
import { UpdateTransportDto } from '../dto/update-transport.dto';
import { Transport } from '../entities/transport.entity';

/**
 * Contrato do repositório de transportes.
 * Mantém o módulo desacoplado da implementação de persistência.
 */
export interface TransportRepositoryInterface {
  /**
   * Cria um transporte.
   */
  create(createTransportDto: CreateTransportDto): Promise<Transport>;

  /**
   * Lista todos os transportes.
   */
  findAll(): Promise<Transport[]>;

  /**
   * Busca um transporte pelo ID.
   */
  findOne(id: string): Promise<Transport | null>;

  /**
   * Busca transportes pela cidade de origem.
   */
  findByOriginCityId(cityOriginId: string): Promise<Transport[]>;

  /**
   * Busca transportes pela cidade de destino.
   */
  findByDestinationCityId(cityDestinationId: string): Promise<Transport[]>;

  /**
   * Atualiza um transporte.
   */
  update(id: string, updateTransportDto: UpdateTransportDto): Promise<Transport | null>;

  /**
   * Remove um transporte.
   */
  remove(id: string): Promise<void>;
}