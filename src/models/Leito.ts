import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import Pacient from './Pacient';
  

@Entity('leitos')
class Leito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Pacient)
  @JoinColumn({ name: 'pacient_id' })
  paciente: Pacient;

  @Column()
  unidade: string;

  @Column()
  andar: string;

  @Column()
  setor: string;

  @Column()
  ala: string;

  @Column()
  covid_19: string;

  @Column()
  tipo_estadia: string;

  @Column()
  tipo_leito: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Leito;