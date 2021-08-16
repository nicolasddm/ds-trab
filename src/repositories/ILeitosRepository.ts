import Leito from "models/Leito";
import CreateLeitoDTO from '../models/CreateLeitoDTO';
import UpdateLeitoDTO from '../models/UpdateLeitoDTO';

export default interface ILeitosRepository {
    findById(id: string): Promise<Leito | undefined>;
    findAllLeitos(): Promise<Leito[]>;
    createLeito(Leito: CreateLeitoDTO): Promise<Leito>;
    updateLeito(Leito: Leito): Promise<Leito>;
}