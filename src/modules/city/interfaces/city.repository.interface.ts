import { CreateCityDto } from '../dto/create-city.dto';
import { UpdateCityDto } from '../dto/update-city.dto';
import { City } from '../entities/city.entity';

/**
 * Contrato do repositório de cidades.
 * Esta interface permite trocar a implementação de persistência no futuro
 * sem afetar o restante do módulo.
 */
export interface CityRepositoryInterface {
  /**
   * Cria uma nova cidade.
   */
  create(createCityDto: CreateCityDto): Promise<City>;

  /**
   * Lista todas as cidades.
   */
  findAll(): Promise<City[]>;

  /**
   * Busca uma cidade pelo ID.
   */
  findOne(id: string): Promise<City | null>;

  /**
   * Atualiza uma cidade existente.
   */
  update(id: string, updateCityDto: UpdateCityDto): Promise<City | null>;

  /**
   * Remove uma cidade pelo ID.
   */
  remove(id: string): Promise<void>;
}