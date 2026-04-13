"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const observation_service_1 = require("./observation.service");
const observation_controller_1 = require("./observation.controller");
const observation_entity_1 = require("./entities/observation.entity");
let ObservationModule = class ObservationModule {
};
exports.ObservationModule = ObservationModule;
exports.ObservationModule = ObservationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([observation_entity_1.Observation])],
        controllers: [observation_controller_1.ObservationController],
        providers: [observation_service_1.ObservationService],
        exports: [observation_service_1.ObservationService],
    })
], ObservationModule);
//# sourceMappingURL=observation.module.js.map