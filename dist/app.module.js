"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const travel_module_1 = require("./modules/travel/travel.module");
const city_module_1 = require("./modules/city/city.module");
const hotel_module_1 = require("./modules/hotel/hotel.module");
const restaurant_module_1 = require("./modules/restaurant/restaurant.module");
const tour_module_1 = require("./modules/tour/tour.module");
const route_module_1 = require("./modules/route/route.module");
const transport_module_1 = require("./modules/transport/transport.module");
const transport_seat_module_1 = require("./modules/transport-seat/transport-seat.module");
const observation_module_1 = require("./modules/observation/observation.module");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://neondb_owner:npg_aKrOMGxF8iy6@ep-delicate-sound-acct92oh-pooler.sa-east-1.aws.neon.tech/neondb',
                autoLoadEntities: true,
                synchronize: true,
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            }),
            travel_module_1.TravelModule,
            city_module_1.CityModule,
            hotel_module_1.HotelModule,
            restaurant_module_1.RestaurantModule,
            tour_module_1.TourModule,
            route_module_1.RouteModule,
            transport_module_1.TransportModule,
            transport_seat_module_1.TransportSeatModule,
            observation_module_1.ObservationModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map