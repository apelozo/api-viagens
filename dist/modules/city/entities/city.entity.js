"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("../../travel/entities/travel.entity");
const hotel_entity_1 = require("../../hotel/entities/hotel.entity");
const restaurant_entity_1 = require("../../restaurant/entities/restaurant.entity");
const tour_entity_1 = require("../../tour/entities/tour.entity");
const route_entity_1 = require("../../route/entities/route.entity");
let City = class City {
    id;
    travelId;
    name;
    createdAt;
    updatedAt;
    travel;
    hotels;
    restaurants;
    tours;
    routes;
};
exports.City = City;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'viagem_id', type: 'uuid' }),
    __metadata("design:type", String)
], City.prototype, "travelId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], City.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], City.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, (travel) => travel.cities, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'viagem_id' }),
    __metadata("design:type", travel_entity_1.Travel)
], City.prototype, "travel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hotel_entity_1.Hotel, (hotel) => hotel.city),
    __metadata("design:type", Array)
], City.prototype, "hotels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => restaurant_entity_1.Restaurant, (restaurant) => restaurant.city),
    __metadata("design:type", Array)
], City.prototype, "restaurants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tour_entity_1.Tour, (tour) => tour.city),
    __metadata("design:type", Array)
], City.prototype, "tours", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => route_entity_1.Route, (route) => route.city),
    __metadata("design:type", Array)
], City.prototype, "routes", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)('cidade')
], City);
//# sourceMappingURL=city.entity.js.map