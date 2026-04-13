import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';

/**
 * Contrato do repositório de restaurantes.
 * Mantém o módulo desacoplado da implementação de persistência.
 */
export interface RestaurantRepositoryInterface {
  /**
   * Cria um restaurante.
   */
  create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;

  /**
   * Lista todos os restaurantes.
   */
  findAll(): Promise<Restaurant[]>;

  /**
   * Busca um restaurante pelo ID.
   */
  findOne(id: string): Promise<Restaurant | null>;

  /**
   * Busca restaurantes de uma cidade.
   */
  findByCityId(cityId: string): Promise<Restaurant[]>;

  /**
   * Atualiza um restaurante.
   */
  update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant | null>;

  /**
   * Remove um restaurante.
   */
  remove(id: string): Promise<void>;
}