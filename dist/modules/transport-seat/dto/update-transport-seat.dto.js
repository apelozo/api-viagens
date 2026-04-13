"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransportSeatDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_transport_seat_dto_1 = require("./create-transport-seat.dto");
class UpdateTransportSeatDto extends (0, mapped_types_1.PartialType)(create_transport_seat_dto_1.CreateTransportSeatDto) {
}
exports.UpdateTransportSeatDto = UpdateTransportSeatDto;
//# sourceMappingURL=update-transport-seat.dto.js.map