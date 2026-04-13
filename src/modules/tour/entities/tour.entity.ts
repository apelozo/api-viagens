import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity';

@Entity('passeio')
export class Tour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cidade_id', type: 'uuid' })
  cityId: string;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'valor_pago', type: 'numeric', precision: 10, scale: 2, nullable: true })
  amountPaid: number;

  // Assumindo que o seu ENUM no banco se chama 'payment_method'
  @Column({ name: 'metodo_pagamento', type: 'enum', enum: ['dinheiro', 'cartao', 'transferencia'], nullable: true })
  paymentMethod: 'dinheiro' | 'cartao' | 'transferencia';

  @Column({ name: 'latitude', type: 'numeric', precision: 10, scale: 8, nullable: true, default: 0.0 })
  latitude: number;

  @Column({ name: 'longitude', type: 'numeric', precision: 10, scale: 8, nullable: true, default: 0.0 })
  longitude: number;

  @Column({ name: 'possui_agendamento', type: 'boolean', default: false })
  hasSchedule: boolean;

  @Column({ name: 'horario_agendado', type: 'varchar', length: 5, nullable: true })
  scheduledTime: string;

  @Column({ name: 'status', type: 'varchar', length: 20, default: 'Gratuito' })
  status: string;

  @Column({ name: 'obs', type: 'text', nullable: true })
  observations: string;

  @Column({ name: 'endereco', type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ name: 'data_agendamento', type: 'date', nullable: true })
  scheduledDate: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
  updatedAt: Date;

  // Relacionamento: Vários passeios pertencem a UMA cidade
  @ManyToOne(() => City, (city) => city.tours, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cidade_id' })
  city: City;
}