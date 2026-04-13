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
exports.Travel = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Travel = class Travel {
    id;
    name;
    startDate;
    endDate;
    createdAt;
    updatedAt;
    cities;
    users;
};
exports.Travel = Travel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Travel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Travel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_inicio', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Travel.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data_fim', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Travel.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Travel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Travel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => city_entity_1.City, (city) => city.travel),
    __metadata("design:type", Array)
], Travel.prototype, "cities", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, user => user.travels),
    (0, typeorm_1.JoinTable)({
        name: 'viagem_usuarios',
        joinColumn: { name: 'viagem_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'usuario_id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Travel.prototype, "users", void 0);
exports.Travel = Travel = __decorate([
    (0, typeorm_1.Entity)('viagem')
], Travel);
//# sourceMappingURL=travel.entity.js.map