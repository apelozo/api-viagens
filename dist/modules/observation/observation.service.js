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
exports.ObservationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const observation_entity_1 = require("./entities/observation.entity");
let ObservationService = class ObservationService {
    observationRepository;
    constructor(observationRepository) {
        this.observationRepository = observationRepository;
    }
    async create(createObservationDto) {
        const ids = [
            createObservationDto.travelId,
            createObservationDto.cityId,
            createObservationDto.hotelId,
            createObservationDto.restaurantId,
            createObservationDto.tourId,
            createObservationDto.transportId,
            createObservationDto.routeId,
        ];
        const filledIdsCount = ids.filter(id => id != null).length;
        if (filledIdsCount !== 1) {
            throw new common_1.BadRequestException('A observação deve estar vinculada a exatamente UMA entidade.');
        }
        const observation = this.observationRepository.create(createObservationDto);
        return await this.observationRepository.save(observation);
    }
    async findAll() {
        return await this.observationRepository.find();
    }
    async findOne(id) {
        const observation = await this.observationRepository.findOne({ where: { id } });
        if (!observation) {
            throw new common_1.NotFoundException(`Observation with ID ${id} not found`);
        }
        return observation;
    }
    async update(id, updateObservationDto) {
        const observation = await this.findOne(id);
        this.observationRepository.merge(observation, updateObservationDto);
        return await this.observationRepository.save(observation);
    }
    async remove(id) {
        const result = await this.observationRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Observation with ID ${id} not found`);
        }
    }
};
exports.ObservationService = ObservationService;
exports.ObservationService = ObservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(observation_entity_1.Observation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ObservationService);
//# sourceMappingURL=observation.service.js.map