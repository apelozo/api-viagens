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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportSeatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transport_seat_entity_1 = require("./entities/transport-seat.entity");
let TransportSeatService = class TransportSeatService {
    seatRepository;
    constructor(seatRepository) {
        this.seatRepository = seatRepository;
    }
    async create(createTransportSeatDto) {
        const seat = this.seatRepository.create(createTransportSeatDto);
        return await this.seatRepository.save(seat);
    }
    async findAllByTransport(transportId) {
        return await this.seatRepository.find({ where: { transportId } });
    }
    async findOne(id) {
        const seat = await this.seatRepository.findOne({ where: { id } });
        if (!seat) {
            throw new common_1.NotFoundException(`Assento com ID ${id} não encontrado`);
        }
        return seat;
    }
    async update(id, updateTransportSeatDto) {
        const seat = await this.findOne(id);
        this.seatRepository.merge(seat, updateTransportSeatDto);
        return await this.seatRepository.save(seat);
    }
    async remove(id) {
        const result = await this.seatRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Assento com ID ${id} não encontrado`);
        }
    }
};
exports.TransportSeatService = TransportSeatService;
exports.TransportSeatService = TransportSeatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transport_seat_entity_1.TransportSeat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransportSeatService);
//# sourceMappingURL=transport-seat.service.js.map