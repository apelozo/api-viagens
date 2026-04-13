import { City } from '../../city/entities/city.entity';
import { User } from '../../users/entities/user.entity';
export declare class Travel {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    cities: City[];
    users: User[];
}
