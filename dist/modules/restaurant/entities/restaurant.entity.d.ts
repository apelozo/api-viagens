import { City } from '../../city/entities/city.entity';
export declare class Restaurant {
    id: string;
    cidade_id: string;
    city: City;
    nome: string;
    tipo_comida: string;
    preco_medio: number;
    endereco: string;
    latitude: number;
    longitude: number;
    reservado: boolean;
    ponto_referencia: string;
    created_at: Date;
    updated_at: Date;
}
