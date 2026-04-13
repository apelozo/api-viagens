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
exports.Route = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
let Route = class Route {
    id;
    cityId;
    name;
    type;
    createdAt;
    updatedAt;
    city;
};
exports.Route = Route;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Route.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cidade_id', type: 'uuid' }),
    __metadata("design:type", String)
], Route.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Route.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo', type: 'enum', enum: ['cidade', 'passeio'], nullable: true }),
    __metadata("design:type", String)
], Route.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Route.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Route.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.routes, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cidade_id' }),
    __metadata("design:type", city_entity_1.City)
], Route.prototype, "city", void 0);
exports.Route = Route = __decorate([
    (0, typeorm_1.Entity)('roteiro')
], Route);
//# sourceMappingURL=route.entity.js.map