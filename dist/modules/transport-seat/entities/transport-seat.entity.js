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
exports.TransportSeat = void 0;
const typeorm_1 = require("typeorm");
const transport_entity_1 = require("../../transport/entities/transport.entity");
let TransportSeat = class TransportSeat {
    id;
    transportId;
    passengerName;
    seatNumber;
    seatClass;
    amountPaid;
    currency;
    transport;
};
exports.TransportSeat = TransportSeat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransportSeat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transporte_id', type: 'uuid' }),
    __metadata("design:type", String)
], TransportSeat.prototype, "transportId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome_passageiro', type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], TransportSeat.prototype, "passengerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_assento', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], TransportSeat.prototype, "seatNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'classe_assento', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], TransportSeat.prototype, "seatClass", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_pago', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TransportSeat.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moeda_pgto_assento', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], TransportSeat.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transport_entity_1.Transport, (transport) => transport.seats, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'transporte_id' }),
    __metadata("design:type", transport_entity_1.Transport)
], TransportSeat.prototype, "transport", void 0);
exports.TransportSeat = TransportSeat = __decorate([
    (0, typeorm_1.Entity)('transporte_assento')
], TransportSeat);
//# sourceMappingURL=transport-seat.entity.js.map