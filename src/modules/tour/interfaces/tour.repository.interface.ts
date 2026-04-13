import { CreateTourDto } from '../dto/create-tour.dto';
import { UpdateTourDto } from '../dto/update-tour.dto';
import { Tour } from '../entities/tour.entity';

/**
 * Contrato do repositório de passeios.
 * Mantém o módulo desacoplado da forma de persistência.
 */
export interface TourRepositoryInterface {
  /**
   * Cria um passeio.
   */
  create(createTourDto: CreateTourDto): Promise<Tour>;

  /**
   * Lista todos os passeios.
   */
  findAll(): Promise<Tour[]>;

  /**
   * Busca um passeio pelo ID.
   */
  findOne(id: string): Promise<Tour | null>;

  /**
   * Busca passeios de uma cidade.
   */
  findByCityId(cityId: string): Promise<Tour[]>;

  /**
   * Atualiza um passeio.
   */
  update(id: string, updateTourDto: UpdateTourDto): Promise<Tour | null>;

  /**
   * Remove um passeio.
   */
  remove(id: string): Promise<void>;
}