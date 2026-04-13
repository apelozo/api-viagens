import { Travel } from '../../travel/entities/travel.entity';
import { City } from '../../city/entities/city.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Transport } from '../../transport/entities/transport.entity';
import { Route } from '../../route/entities/route.entity';
export declare class Observation {
    id: string;
    travelId?: string;
    cityId?: string;
    hotelId?: string;
    restaurantId?: string;
    tourId?: string;
    transportId?: string;
    routeId?: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    travel?: Travel;
    city?: City;
    hotel?: Hotel;
    restaurant?: Restaurant;
    tour?: Tour;
    transport?: Transport;
    route?: Route;
}
