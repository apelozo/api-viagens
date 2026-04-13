import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Transport } from '../../transport/entities/transport.entity';

@Entity('transporte_assento')
export class TransportSeat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'transporte_id', type: 'uuid' })
  transportId: string;

  @Column({ name: 'nome_passageiro', type: 'varchar', length: 150 })
  passengerName: string;

  @Column({ name: 'numero_assento', type: 'varchar', length: 10, nullable: true })
  seatNumber: string;

  @Column({ name: 'classe_assento', type: 'varchar', length: 50, nullable: true })
  seatClass: string;

  @Column({ name: 'valor_pago', type: 'decimal', precision: 10, scale: 2, nullable: true })
  amountPaid: number;

  @Column({ name: 'moeda_pgto_assento', type: 'varchar', length: 20, nullable: true })
  currency: string;

  // Relacionamento de volta para o Transporte
  @ManyToOne(() => Transport, (transport) => transport.seats, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'transporte_id' })
  transport: Transport;
}