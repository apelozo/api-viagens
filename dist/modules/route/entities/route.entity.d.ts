import { City } from '../../city/entities/city.entity';
export declare class Route {
    id: string;
    cityId: string;
    name: string;
    type: 'cidade' | 'passeio';
    createdAt: Date;
    updatedAt: Date;
    city: City;
}
