import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportSeatService } from './transport-seat.service';
import { TransportSeatController } from './transport-seat.controller';
import { TransportSeat } from './entities/transport-seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportSeat])],
  controllers: [TransportSeatController],
  providers: [TransportSeatService],
  exports: [TransportSeatService], // Exportado caso outro módulo precise usar
})
export class TransportSeatModule {}