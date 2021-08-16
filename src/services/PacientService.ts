import { inject, injectable } from 'tsyringe';

import IPacientsRepository from 'repositories/IPacientsRepository';
import CreatePacientDTO from '../models/CreatePacientDTO';
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
        const pacients = await this.pacientsRepository.findAllPacients();

        return pacients;
    }

    public async createNewPacient(data: CreatePacientDTO): Promise<Pacient> {
        const cpfPacient = data.cpf;
        const alreadyExistPacient = await this.pacientsRepository.findByCPF(cpfPacient);

        if (alreadyExistPacient) {
            throw Error('Esse Paciente já está cadastrado');
        }

        const pacient = await this.pacientsRepository.createPacient(data);

        return pacient;
    }
}

export default PacientService;