import { inject, injectable } from 'tsyringe';

import Leito from 'models/Leito';
import ILeitosRepository from 'repositories/ILeitosRepository';
import CreateLeitoDTO from 'models/CreateLeitoDTO';
import UpdateLeitoDTO from 'models/UpdateLeitoDTO';

interface createLeitosReturn {
    ids: string[];
    tipoLeito: string;
    unidade: string;
    andar: string;
    setor: string;
    ala: string;
}

@injectable()
class LeitoService {
    constructor(
        @inject('LeitosRepository')
        private leitosRepository: ILeitosRepository
    ) {}

    public async getLeito(id: string): Promise<Leito> {
        const leito = await this.leitosRepository.findById(id);

        if(!leito) {
            throw new Error("Leito não existe!");
        }

        return leito;
    }


    public async getLeitos(): Promise<Leito[] | undefined> {
        const leitos = await this.leitosRepository.findAllLeitos();

        return leitos;
    }

    public async createNewLeito(data: CreateLeitoDTO): Promise<createLeitosReturn> {
        const ids = [];
        for(let i = 0; i < data.quantidade; i++) {
            const leito = await this.leitosRepository.createLeito(data);
            if (leito) {
                ids.push(leito.id);
            }
        }

        const leitosResponse: createLeitosReturn = { 
            ids,
            tipoLeito: data.tipo_leito,
            unidade: data.unidade,
            andar: data.andar,
            setor: data.setor,
            ala: data.ala
        }

        return leitosResponse;
    }

    public async updateLeitos(data: UpdateLeitoDTO): Promise<createLeitosReturn> {
        const { ids, nova_unidade, novo_tipo_leito, andar, ala, setor } = data;

        ids.map(async id => {
            const leito = await this.getLeito(id);
            leito.unidade = nova_unidade;
            leito.tipo_leito = novo_tipo_leito;
            await this.leitosRepository.updateLeito(leito);
        });
           
        const leitosResponse: createLeitosReturn = { 
            ids,
            tipoLeito: novo_tipo_leito,
            unidade: nova_unidade,
            andar,
            setor,
            ala
        }

        return leitosResponse;
    }

}

export default LeitoService;