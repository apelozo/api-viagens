import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Travel } from '../../travel/entities/travel.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Route } from '../../route/entities/route.entity';

@Entity('cidade')
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'viagem_id', type: 'uuid' })
  travelId: string;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Travel, (travel) => travel.cities, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'viagem_id' })
  travel: Travel;

  // Novos relacionamentos adicionados:
  @OneToMany(() => Hotel, (hotel) => hotel.city)
  hotels: Hotel[];

  @OneToMany(() => Restaurant, (restaurant) => restaurant.city)
  restaurants: Restaurant[];

  @OneToMany(() => Tour, (tour) => tour.city)
  tours: Tour[];

  @OneToMany(() => Route, (route) => route.city)
  routes: Route[];
}