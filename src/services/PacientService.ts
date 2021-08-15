import { inject, injectable } from 'tsyringe';

import IPacientsRepository from 'repositories/IPacientsRepository';
import Pacient from '../models/Pacient';

@injectable()
class PacientService {
    constructor(
        @inject('PacientsRepository')
        private pacientsRepository: IPacientsRepository
    ) {}

    public async findPacientByCPF(cpf: string): Promise<Pacient | undefined> {
        const pacient = await this.pacientsRepository.findByCPF(cpf);

        if(!pacient) {
            throw new Error('Paciente não encontrado!');
        }

        return pacient;
    }

    public async getPacients(): Promise<Pacient[] | undefined> {
        const pacients = await this.pacientsRepository.findAll();

        return pacients;
    }
}

export default PacientService;