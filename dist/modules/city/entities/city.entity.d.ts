import { Travel } from '../../travel/entities/travel.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Route } from '../../route/entities/route.entity';
export declare class City {
    id: string;
    travelId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    travel: Travel;
    hotels: Hotel[];
    restaurants: Restaurant[];
    tours: Tour[];
    routes: Route[];
}
