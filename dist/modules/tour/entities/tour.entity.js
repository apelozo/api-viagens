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
exports.Tour = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
let Tour = class Tour {
    id;
    cityId;
    name;
    amountPaid;
    paymentMethod;
    latitude;
    longitude;
    hasSchedule;
    scheduledTime;
    status;
    observations;
    address;
    scheduledDate;
    createdAt;
    updatedAt;
    city;
};
exports.Tour = Tour;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tour.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cidade_id', type: 'uuid' }),
    __metadata("design:type", String)
], Tour.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Tour.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_pago', type: 'numeric', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Tour.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metodo_pagamento', type: 'enum', enum: ['dinheiro', 'cartao', 'transferencia'], nullable: true }),
    __metadata("design:type", String)
], Tour.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'latitude', type: 'numeric', precision: 10, scale: 8, nullable: true, default: 0.0 }),
    __metadata("design:type", Number)
], Tour.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'longitude', type: 'numeric', precision: 10, scale: 8, nullable: true, default: 0.0 }),
    __metadata("design:type", Number)
], Tour.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'possui_agendamento', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Tour.prototype, "hasSchedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horario_agendado', type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Tour.prototype, "scheduledTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 20, default: 'Gratuito' }),
    __metadata("design:type", String)
], Tour.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'obs', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Tour.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endereco', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Tour.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_agendamento', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Tour.prototype, "scheduledDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], Tour.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], Tour.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.tours, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cidade_id' }),
    __metadata("design:type", city_entity_1.City)
], Tour.prototype, "city", void 0);
exports.Tour = Tour = __decorate([
    (0, typeorm_1.Entity)('passeio')
], Tour);
//# sourceMappingURL=tour.entity.js.map