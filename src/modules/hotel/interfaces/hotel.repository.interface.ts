import { CreateHotelDto } from '../dto/create-hotel.dto';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
import { Hotel } from '../entities/hotel.entity';

/**
 * Contrato do repositório de hotéis.
 * Esta interface permite trocar a forma de persistência no futuro
 * sem necessidade de mudar o restante do módulo.
 */
export interface HotelRepositoryInterface {
  /**
   * Cria um novo hotel.
   */
  create(createHotelDto: CreateHotelDto): Promise<Hotel>;

  /**
   * Lista todos os hotéis.
   */
  findAll(): Promise<Hotel[]>;

  /**
   * Busca um hotel pelo identificador.
   */
  findOne(id: string): Promise<Hotel | null>;

  /**
   * Busca hotéis vinculados a uma cidade.
   */
  findByCityId(cityId: string): Promise<Hotel[]>;

  /**
   * Atualiza um hotel existente.
   */
  update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel | null>;

  /**
   * Remove um hotel pelo identificador.
   */
  remove(id: string): Promise<void>;
}