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
exports.Hotel = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
let Hotel = class Hotel {
    id;
    cityId;
    name;
    amountPaid;
    paymentMethod;
    currency;
    paymentStatus;
    freeCancellation;
    chain;
    checkInTime;
    address;
    latitude;
    longitude;
    createdAt;
    updatedAt;
    city;
};
exports.Hotel = Hotel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Hotel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cidade_id', type: 'uuid' }),
    __metadata("design:type", String)
], Hotel.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Hotel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_pago', type: 'numeric', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Hotel.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_pagamento', type: 'enum', enum: ['dinheiro', 'cartao', 'transferencia'], nullable: true }),
    __metadata("design:type", String)
], Hotel.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moeda', type: 'varchar', length: 3, default: 'BRL' }),
    __metadata("design:type", String)
], Hotel.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status_pagamento', type: 'varchar', length: 20, default: 'A_PAGAR' }),
    __metadata("design:type", String)
], Hotel.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cancelamento_gratis', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Hotel.prototype, "freeCancellation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rede', type: 'varchar', length: 50, default: 'Outras' }),
    __metadata("design:type", String)
], Hotel.prototype, "chain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horario_checkin', type: 'time', nullable: true }),
    __metadata("design:type", String)
], Hotel.prototype, "checkInTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endereco', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Hotel.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'latitude', type: 'numeric', precision: 10, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], Hotel.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'longitude', type: 'numeric', precision: 11, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], Hotel.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Hotel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Hotel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, city => city.hotels),
    (0, typeorm_1.JoinColumn)({ name: 'cidade_id' }),
    __metadata("design:type", city_entity_1.City)
], Hotel.prototype, "city", void 0);
exports.Hotel = Hotel = __decorate([
    (0, typeorm_1.Entity)('hotel')
], Hotel);
//# sourceMappingURL=hotel.entity.js.map