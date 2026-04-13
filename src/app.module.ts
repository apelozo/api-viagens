import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller'; // <-- 1. ADICIONE ESTE IMPORT


// Importando todos os nossos módulos
import { TravelModule } from './modules/travel/travel.module';
import { CityModule } from './modules/city/city.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { TourModule } from './modules/tour/tour.module';
import { RouteModule } from './modules/route/route.module';
import { TransportModule } from './modules/transport/transport.module';
import { TransportSeatModule } from './modules/transport-seat/transport-seat.module';
import { ObservationModule } from './modules/observation/observation.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // COLE A SUA URL AQUI (Lembre-se de apagar o ?sslmode=require do final)
      url: 'postgresql://neondb_owner:npg_aKrOMGxF8iy6@ep-delicate-sound-acct92oh-pooler.sa-east-1.aws.neon.tech/neondb',
      autoLoadEntities: true,
      synchronize: true, // Isso vai criar as tabelas no Neon automaticamente
      ssl: true, 
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
	

	
    // Nossos Módulos
    TravelModule,
    CityModule,
    HotelModule,
    RestaurantModule,
    TourModule,
    RouteModule,
    TransportModule,
    TransportSeatModule,
    ObservationModule,
	UsersModule, 
    AuthModule,
  ],
  
  
  controllers: [
    AppController, // <-- 2. COLOQUE ELE AQUI NA LISTA DE CONTROLLERS
  ],
  providers: [],  
  
})
export class AppModule {}