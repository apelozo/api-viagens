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
exports.TransportSeatController = void 0;
const common_1 = require("@nestjs/common");
const transport_seat_service_1 = require("./transport-seat.service");
const create_transport_seat_dto_1 = require("./dto/create-transport-seat.dto");
const update_transport_seat_dto_1 = require("./dto/update-transport-seat.dto");
let TransportSeatController = class TransportSeatController {
    seatService;
    constructor(seatService) {
        this.seatService = seatService;
    }
    create(createTransportSeatDto) {
        return this.seatService.create(createTransportSeatDto);
    }
    findAllByTransport(transportId) {
        return this.seatService.findAllByTransport(transportId);
    }
    findOne(id) {
        return this.seatService.findOne(id);
    }
    update(id, updateTransportSeatDto) {
        return this.seatService.update(id, updateTransportSeatDto);
    }
    remove(id) {
        return this.seatService.remove(id);
    }
};
exports.TransportSeatController = TransportSeatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transport_seat_dto_1.CreateTransportSeatDto]),
    __metadata("design:returntype", Promise)
], TransportSeatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('transport/:transportId'),
    __param(0, (0, common_1.Param)('transportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransportSeatController.prototype, "findAllByTransport", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransportSeatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transport_seat_dto_1.UpdateTransportSeatDto]),
    __metadata("design:returntype", Promise)
], TransportSeatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransportSeatController.prototype, "remove", null);
exports.TransportSeatController = TransportSeatController = __decorate([
    (0, common_1.Controller)('transport-seat'),
    __metadata("design:paramtypes", [transport_seat_service_1.TransportSeatService])
], TransportSeatController);
//# sourceMappingURL=transport-seat.controller.js.map