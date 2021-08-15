import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
  

@Entity('pacients')
class Pacient {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @Column()
  cpf: string;

  @Column()
  nome: string;

  // @Column()
  // idade: string;

  // @Column()
  // setor: string;

  // @Column()
  // unidade: string;

  // @Column()
  // codigoCid: string;

  // @Column()
  // origem: string;

  // @CreateDateColumn()
  // created_at: Date;

  // @UpdateDateColumn()
  // updated_at: Date;

}

export default Pacient;