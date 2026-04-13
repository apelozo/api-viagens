import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity';

@Entity('roteiro')
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cidade_id', type: 'uuid' })
  cityId: string;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'tipo', type: 'enum', enum: ['cidade', 'passeio'], nullable: true })
  type: 'cidade' | 'passeio';

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => City, (city) => city.routes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cidade_id' })
  city: City;
}