"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObservationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_observation_dto_1 = require("./create-observation.dto");
class UpdateObservationDto extends (0, mapped_types_1.PartialType)(create_observation_dto_1.CreateObservationDto) {
}
exports.UpdateObservationDto = UpdateObservationDto;
//# sourceMappingURL=update-observation.dto.js.map