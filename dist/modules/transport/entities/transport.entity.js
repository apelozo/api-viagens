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
exports.Transport = void 0;
const typeorm_1 = require("typeorm");
const transport_seat_entity_1 = require("../../transport-seat/entities/transport-seat.entity");
let Transport = class Transport {
    id;
    viagemId;
    type;
    company;
    identificationNumber;
    reservationCode;
    departureAirport;
    arrivalAirport;
    category;
    status;
    observations;
    departureLocation;
    arrivalLocation;
    departureDate;
    arrivalDate;
    amountPaid;
    currency;
    createdAt;
    updatedAt;
    seats;
};
exports.Transport = Transport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Transport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'viagem_id', type: 'uuid' }),
    __metadata("design:type", String)
], Transport.prototype, "viagemId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_transporte', type: 'enum', enum: ['voo', 'trem', 'onibus', 'carro'] }),
    __metadata("design:type", String)
], Transport.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companhia', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_identificacao', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "identificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'localizador', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "reservationCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aeroporto_partida', type: 'char', length: 3, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "departureAirport", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aeroporto_chegada', type: 'char', length: 3, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "arrivalAirport", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoria', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 50, default: 'Confirmado' }),
    __metadata("design:type", String)
], Transport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'obs', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'local_partida', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "departureLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'local_chegada', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "arrivalLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_partida', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Transport.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_chegada', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Transport.prototype, "arrivalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_pago', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Transport.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moeda_pgto', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Transport.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Transport.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Transport.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transport_seat_entity_1.TransportSeat, (seat) => seat.transport, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Transport.prototype, "seats", void 0);
exports.Transport = Transport = __decorate([
    (0, typeorm_1.Entity)('transporte')
], Transport);
//# sourceMappingURL=transport.entity.js.map