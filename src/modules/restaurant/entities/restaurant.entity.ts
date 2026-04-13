import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity';

@Entity('restaurante') // Nome da tabela no banco de dados
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  cidade_id: string;

  // 👇 ESTE É O BLOCO QUE FALTAVA 👇
  @ManyToOne(() => City)
  @JoinColumn({ name: 'cidade_id' })
  city: City; 
  // 👆 Agora a entidade City vai encontrar a propriedade 'city' 👆

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tipo_comida: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  preco_medio: number;

  @Column({ type: 'text', nullable: true })
  endereco: string;

  @Column({ type: 'numeric', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'numeric', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ type: 'boolean', default: false })
  reservado: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ponto_referencia: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}