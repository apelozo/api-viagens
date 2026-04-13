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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("./entities/city.entity");
let CityService = class CityService {
    cityRepository;
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    async create(createCityDto) {
        const city = this.cityRepository.create(createCityDto);
        return await this.cityRepository.save(city);
    }
    async findAll() {
        return await this.cityRepository.find({ relations: ['travel'] });
    }
    async findOne(id) {
        const city = await this.cityRepository.findOne({
            where: { id },
            relations: ['travel']
        });
        if (!city) {
            throw new common_1.NotFoundException(`City with ID ${id} not found`);
        }
        return city;
    }
    async findByTravel(travelId) {
        return await this.cityRepository.find({ where: { travelId } });
    }
    async update(id, updateCityDto) {
        const city = await this.findOne(id);
        this.cityRepository.merge(city, updateCityDto);
        return await this.cityRepository.save(city);
    }
    async remove(id) {
        const result = await this.cityRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`City with ID ${id} not found`);
        }
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CityService);
//# sourceMappingURL=city.service.js.map