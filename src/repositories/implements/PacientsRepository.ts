import IPacientsRepository from 'repositories/IPacientsRepository';
import Pacient from '../../models/Pacient';
import { EntityRepository } from 'typeorm';

@EntityRepository(Pacient)
class PacientsRepository implements IPacientsRepository {
    // private pacients: Pacient[] = [];
    private pacients = [{ cpf: '1111', nome: 'LinkForce'}, { cpf: '2222', nome: 'LucasBlock'}, { cpf: '3333', nome: 'NicolasDeMarco'}]
  
    public async findByCPF(cpf: string): Promise<Pacient | undefined> {
      const findPacient = this.pacients.find(pacient => pacient.cpf === cpf);
  
      return findPacient;
    }

    public async findAll(): Promise<Pacient[] | undefined> {
      const allPacients = this.pacients;
  
      return allPacients;
    }
}  

export default PacientsRepository;