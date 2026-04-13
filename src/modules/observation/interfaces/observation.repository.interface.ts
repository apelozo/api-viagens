import { CreateObservationDto } from '../dto/create-observation.dto';
import { UpdateObservationDto } from '../dto/update-observation.dto';
import { Observation } from '../entities/observation.entity';

/**
 * Contrato do repositório de observações.
 * Mantém o módulo desacoplado da implementação de persistência.
 */
export interface ObservationRepositoryInterface {
  /**
   * Cria uma observação.
   */
  create(createObservationDto: CreateObservationDto): Promise<Observation>;

  /**
   * Lista todas as observações.
   */
  findAll(): Promise<Observation[]>;

  /**
   * Busca uma observação pelo ID.
   */
  findOne(id: string): Promise<Observation | null>;

  /**
   * Busca observações por tipo e ID de entidade vinculada.
   */
  findByTarget(targetType: string, targetId: string): Promise<Observation[]>;

  /**
   * Atualiza uma observação.
   */
  update(id: string, updateObservationDto: UpdateObservationDto): Promise<Observation | null>;

  /**
   * Remove uma observação.
   */
  remove(id: string): Promise<void>;
}