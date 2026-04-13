import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TransportSeat } from '../../transport-seat/entities/transport-seat.entity';

@Entity('transporte')
export class Transport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'viagem_id', type: 'uuid' })
  viagemId: string;

  @Column({ name: 'tipo_transporte', type: 'enum', enum: ['voo', 'trem', 'onibus', 'carro'] })
  type: 'voo' | 'trem' | 'onibus' | 'carro';

  @Column({ name: 'companhia', type: 'varchar', length: 255, nullable: true })
  company: string;

  @Column({ name: 'numero_identificacao', type: 'varchar', length: 100, nullable: true })
  identificationNumber: string;

  // --- NOVOS CAMPOS ADICIONADOS ---
  @Column({ name: 'localizador', type: 'varchar', length: 50, nullable: true })
  reservationCode: string;

  @Column({ name: 'aeroporto_partida', type: 'char', length: 3, nullable: true })
  departureAirport: string;

  @Column({ name: 'aeroporto_chegada', type: 'char', length: 3, nullable: true })
  arrivalAirport: string;

  @Column({ name: 'categoria', type: 'varchar', length: 100, nullable: true })
  category: string;

  @Column({ name: 'status', type: 'varchar', length: 50, default: 'Confirmado' })
  status: string;

  @Column({ name: 'obs', type: 'text', nullable: true })
  observations: string;
  // ---------------------------------

  @Column({ name: 'local_partida', type: 'varchar', length: 255, nullable: true })
  departureLocation: string;

  @Column({ name: 'local_chegada', type: 'varchar', length: 255, nullable: true })
  arrivalLocation: string;

  @Column({ name: 'data_partida', type: 'timestamp', nullable: true })
  departureDate: Date;

  @Column({ name: 'data_chegada', type: 'timestamp', nullable: true })
  arrivalDate: Date;

  @Column({ name: 'valor_pago', type: 'decimal', precision: 10, scale: 2, nullable: true })
  amountPaid: number;

  // --- NOVO CAMPO DE MOEDA ---
  @Column({ name: 'moeda_pgto', type: 'varchar', length: 10, nullable: true })
  currency: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relacionamento com a tabela transporte_assento
  // Adicionado cascade: true para permitir salvar o transporte e os assentos na mesma requisição
  @OneToMany(() => TransportSeat, (seat) => seat.transport, { cascade: true, eager: true })
  seats: TransportSeat[];
}