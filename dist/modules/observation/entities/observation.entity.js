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
exports.Observation = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("../../travel/entities/travel.entity");
const city_entity_1 = require("../../city/entities/city.entity");
const hotel_entity_1 = require("../../hotel/entities/hotel.entity");
const restaurant_entity_1 = require("../../restaurant/entities/restaurant.entity");
const tour_entity_1 = require("../../tour/entities/tour.entity");
const transport_entity_1 = require("../../transport/entities/transport.entity");
const route_entity_1 = require("../../route/entities/route.entity");
let Observation = class Observation {
    id;
    travelId;
    cityId;
    hotelId;
    restaurantId;
    tourId;
    transportId;
    routeId;
    text;
    createdAt;
    updatedAt;
    travel;
    city;
    hotel;
    restaurant;
    tour;
    transport;
    route;
};
exports.Observation = Observation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Observation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'viagem_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "travelId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cidade_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hotel_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "hotelId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'restaurante_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "restaurantId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'passeio_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "tourId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transporte_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "transportId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'roteiro_id', type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "routeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'texto', type: 'text' }),
    __metadata("design:type", String)
], Observation.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Observation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Observation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'viagem_id' }),
    __metadata("design:type", travel_entity_1.Travel)
], Observation.prototype, "travel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cidade_id' }),
    __metadata("design:type", city_entity_1.City)
], Observation.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hotel_entity_1.Hotel, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'hotel_id' }),
    __metadata("design:type", hotel_entity_1.Hotel)
], Observation.prototype, "hotel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => restaurant_entity_1.Restaurant, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'restaurante_id' }),
    __metadata("design:type", restaurant_entity_1.Restaurant)
], Observation.prototype, "restaurant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tour_entity_1.Tour, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'passeio_id' }),
    __metadata("design:type", tour_entity_1.Tour)
], Observation.prototype, "tour", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transport_entity_1.Transport, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'transporte_id' }),
    __metadata("design:type", transport_entity_1.Transport)
], Observation.prototype, "transport", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => route_entity_1.Route, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'roteiro_id' }),
    __metadata("design:type", route_entity_1.Route)
], Observation.prototype, "route", void 0);
exports.Observation = Observation = __decorate([
    (0, typeorm_1.Entity)('observacao')
], Observation);
//# sourceMappingURL=observation.entity.js.map