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
exports.TourService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tour_entity_1 = require("./entities/tour.entity");
let TourService = class TourService {
    tourRepository;
    constructor(tourRepository) {
        this.tourRepository = tourRepository;
    }
    async create(createTourDto) {
        const tour = this.tourRepository.create(createTourDto);
        return await this.tourRepository.save(tour);
    }
    async findAll() {
        return await this.tourRepository.find({ relations: ['city'] });
    }
    async findOne(id) {
        const tour = await this.tourRepository.findOne({
            where: { id },
            relations: ['city']
        });
        if (!tour) {
            throw new common_1.NotFoundException(`Tour with ID ${id} not found`);
        }
        return tour;
    }
    async findByCity(cityId) {
        return await this.tourRepository.find({ where: { cityId } });
    }
    async update(id, updateTourDto) {
        const tour = await this.findOne(id);
        this.tourRepository.merge(tour, updateTourDto);
        return await this.tourRepository.save(tour);
    }
    async remove(id) {
        const result = await this.tourRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tour with ID ${id} not found`);
        }
    }
};
exports.TourService = TourService;
exports.TourService = TourService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tour_entity_1.Tour)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TourService);
//# sourceMappingURL=tour.service.js.map