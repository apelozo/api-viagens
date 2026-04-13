import { CreateTravelDto } from '../dto/create-travel.dto';
import { UpdateTravelDto } from '../dto/update-travel.dto';
import { Travel } from '../entities/travel.entity';

/**
 * Contrato do repositório de viagens.
 * Esta interface define os métodos que qualquer implementação de persistência
 * deve oferecer para que o módulo funcione de forma desacoplada.
 */
export interface TravelRepositoryInterface {
  /**
   * Cria uma nova viagem.
   */
  create(createTravelDto: CreateTravelDto): Promise<Travel>;

  /**
   * Retorna todas as viagens cadastradas.
   */
  findAll(): Promise<Travel[]>;

  /**
   * Busca uma viagem específica pelo identificador.
   */
  findOne(id: string): Promise<Travel | null>;

  /**
   * Atualiza uma viagem existente.
   */
  update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel | null>;

  /**
   * Remove uma viagem pelo identificador.
   */
  remove(id: string): Promise<void>;
}