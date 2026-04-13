

// travel.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { Travel } from './entities/travel.entity';
import { User } from '../users/entities/user.entity'; // Importe o User


@Module({
	
  imports: [
    // ADICIONE O USER AQUI JUNTO COM O TRAVEL
    TypeOrmModule.forFeature([Travel, User]) 
  ],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}	
	
	
	
	/*
  imports: [TypeOrmModule.forFeature([Travel])],
  controllers: [TravelController],
  providers: [TravelService],
  exports: [TravelService],
})
export class TravelModule {}
*/