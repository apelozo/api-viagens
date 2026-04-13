
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity'; // Verifique se este caminho relativo está correto para a sua estrutura

@Entity('hotel')
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cidade_id', type: 'uuid' })
  cityId: string;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'valor_pago', type: 'numeric', precision: 10, scale: 2, nullable: true })
  amountPaid: number;

  @Column({ name: 'metodo_pagamento', type: 'enum', enum: ['dinheiro', 'cartao', 'transferencia'], nullable: true })
  paymentMethod: string;

  // ==========================================
  // NOVOS CAMPOS MAPEADOS DO SCRIPT
  // ==========================================
  
  @Column({ name: 'moeda', type: 'varchar', length: 3, default: 'BRL' })
  currency: string;

  @Column({ name: 'status_pagamento', type: 'varchar', length: 20, default: 'A_PAGAR' })
  paymentStatus: string;

  @Column({ name: 'cancelamento_gratis', type: 'boolean', default: false })
  freeCancellation: boolean;

  @Column({ name: 'rede', type: 'varchar', length: 50, default: 'Outras' })
  chain: string;

  @Column({ name: 'horario_checkin', type: 'time', nullable: true })
  checkInTime: string;

  @Column({ name: 'endereco', type: 'text', nullable: true })
  address: string;

  @Column({ name: 'latitude', type: 'numeric', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ name: 'longitude', type: 'numeric', precision: 11, scale: 8, nullable: true })
  longitude: number;

  // ==========================================

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => City, city => city.hotels)
  @JoinColumn({ name: 'cidade_id' })
  city: City;
}