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
exports.CreateHotelDto = exports.HotelChain = exports.PaymentStatus = exports.PaymentMethod = void 0;
const class_validator_1 = require("class-validator");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["DINHEIRO"] = "dinheiro";
    PaymentMethod["CARTAO"] = "cartao";
    PaymentMethod["TRANSFERENCIA"] = "transferencia";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAGO"] = "PAGO";
    PaymentStatus["A_PAGAR"] = "A_PAGAR";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var HotelChain;
(function (HotelChain) {
    HotelChain["ALL"] = "All";
    HotelChain["HILTON"] = "Hilton";
    HotelChain["MARRIOT"] = "Marriot";
    HotelChain["HYATT"] = "Hyatt";
    HotelChain["OUTRAS"] = "Outras";
})(HotelChain || (exports.HotelChain = HotelChain = {}));
class CreateHotelDto {
    cityId;
    name;
    amountPaid;
    paymentMethod;
    currency;
    paymentStatus;
    freeCancellation;
    chain;
    checkInTime;
    address;
    latitude;
    longitude;
}
exports.CreateHotelDto = CreateHotelDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "cityId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateHotelDto.prototype, "amountPaid", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PaymentMethod),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PaymentStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateHotelDto.prototype, "freeCancellation", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(HotelChain),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "chain", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "checkInTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateHotelDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateHotelDto.prototype, "longitude", void 0);
//# sourceMappingURL=create-hotel.dto.js.map