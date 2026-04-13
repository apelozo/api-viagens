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
exports.ObservationController = void 0;
const common_1 = require("@nestjs/common");
const observation_service_1 = require("./observation.service");
const create_observation_dto_1 = require("./dto/create-observation.dto");
const update_observation_dto_1 = require("./dto/update-observation.dto");
let ObservationController = class ObservationController {
    observationService;
    constructor(observationService) {
        this.observationService = observationService;
    }
    async create(createObservationDto) {
        return await this.observationService.create(createObservationDto);
    }
    async findAll() {
        return await this.observationService.findAll();
    }
    async findOne(id) {
        return await this.observationService.findOne(id);
    }
    async update(id, updateObservationDto) {
        return await this.observationService.update(id, updateObservationDto);
    }
    async remove(id) {
        return await this.observationService.remove(id);
    }
};
exports.ObservationController = ObservationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_observation_dto_1.CreateObservationDto]),
    __metadata("design:returntype", Promise)
], ObservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ObservationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObservationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_observation_dto_1.UpdateObservationDto]),
    __metadata("design:returntype", Promise)
], ObservationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObservationController.prototype, "remove", null);
exports.ObservationController = ObservationController = __decorate([
    (0, common_1.Controller)('observation'),
    __metadata("design:paramtypes", [observation_service_1.ObservationService])
], ObservationController);
//# sourceMappingURL=observation.controller.js.map