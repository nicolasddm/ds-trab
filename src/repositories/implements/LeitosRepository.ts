import ILeitosRepository from 'repositories/ILeitosRepository';
import Leito from '../../models/Leito';
import CreateLeitoDTO from '../../models/CreateLeitoDTO';
import UpdateLeitoDTO from '../../models/UpdateLeitoDTO';

import { EntityRepository, Repository, getRepository } from 'typeorm';

@EntityRepository(Leito)
class LeitosRepository implements ILeitosRepository {
    private ormRepository: Repository<Leito>;

    constructor() {
      this.ormRepository = getRepository(Leito);
    }

    public async findById(id: string): Promise<Leito | undefined> {
        const leito = await this.ormRepository.findOne({ where: { id }});

        return leito;
    }

    public async findAllLeitos(): Promise<Leito[]> {
        const leitos = await this.ormRepository.find();

        return leitos;
    }

    public async createLeito(leito: CreateLeitoDTO): Promise<Leito> {
        const newLeito = this.ormRepository.create(leito);

        await this.ormRepository.save(newLeito);
        
        return newLeito;
    }

    public async updateLeito(leito: Leito): Promise<Leito> {
        const updatedLeito = await this.ormRepository.save(leito);
        
        return updatedLeito;
    }
    
}  

export default LeitosRepository;