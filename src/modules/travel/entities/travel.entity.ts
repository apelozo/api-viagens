import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { City } from '../../city/entities/city.entity';
import { User } from '../../users/entities/user.entity';

@Entity('viagem') // Mapeia para a tabela 'viagem' no banco
export class Travel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'data_inicio', type: 'date', nullable: true })
  startDate: Date;

  @Column({ name: 'data_fim', type: 'date', nullable: true })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relacionamento: Um Travel (Viagem) possui várias Cities (Cidades)
  @OneToMany(() => City, (city) => city.travel)
  cities: City[];

  // Relacionamento N:M com Usuários (Perfis)
  @ManyToMany(() => User, user => user.travels)
  @JoinTable({
    name: 'viagem_usuarios', // Nome da tabela intermediária no banco em português
    joinColumn: { name: 'viagem_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'usuario_id', referencedColumnName: 'id' }
  })
  users: User[];
}