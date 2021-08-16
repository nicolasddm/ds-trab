import IPacientsRepository from 'repositories/IPacientsRepository';
import Pacient from '../../models/Pacient';
import CreatePacientDTO from '../../models/CreatePacientDTO';

import { EntityRepository, Repository, getRepository } from 'typeorm';

@EntityRepository(Pacient)
class PacientsRepository implements IPacientsRepository {
    private ormRepository: Repository<Pacient>;

    constructor() {
      this.ormRepository = getRepository(Pacient);
    }
    public async findByCPF(cpf: string): Promise<Pacient | undefined> {
      const findPacient = await this.ormRepository.findOne({ where: { cpf }});
  
      return findPacient;
    }

    public async findAllPacients(): Promise<Pacient[]> {
      const allPacients = await this.ormRepository.find();
  
      return allPacients;
    }
    
    public async createPacient(pacient: CreatePacientDTO): Promise<Pacient> {
      const newPacient = this.ormRepository.create(pacient);

      await this.ormRepository.save(newPacient);
      
      return newPacient;
    }
}  

export default PacientsRepository;