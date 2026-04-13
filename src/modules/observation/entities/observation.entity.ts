import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Travel } from '../../travel/entities/travel.entity';
import { City } from '../../city/entities/city.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Transport } from '../../transport/entities/transport.entity';
import { Route } from '../../route/entities/route.entity';

@Entity('observacao')
export class Observation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'viagem_id', type: 'uuid', nullable: true })
  travelId?: string;

  @Column({ name: 'cidade_id', type: 'uuid', nullable: true })
  cityId?: string;

  @Column({ name: 'hotel_id', type: 'uuid', nullable: true })
  hotelId?: string;

  @Column({ name: 'restaurante_id', type: 'uuid', nullable: true })
  restaurantId?: string;

  @Column({ name: 'passeio_id', type: 'uuid', nullable: true })
  tourId?: string;

  @Column({ name: 'transporte_id', type: 'uuid', nullable: true })
  transportId?: string;

  @Column({ name: 'roteiro_id', type: 'uuid', nullable: true })
  routeId?: string;

  @Column({ name: 'texto', type: 'text' })
  text: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relacionamentos opcionais
  @ManyToOne(() => Travel, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'viagem_id' })
  travel?: Travel;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cidade_id' })
  city?: City;

  @ManyToOne(() => Hotel, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hotel_id' })
  hotel?: Hotel;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurante_id' })
  restaurant?: Restaurant;

  @ManyToOne(() => Tour, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'passeio_id' })
  tour?: Tour;

  @ManyToOne(() => Transport, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'transporte_id' })
  transport?: Transport;

  @ManyToOne(() => Route, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'roteiro_id' })
  route?: Route;
}