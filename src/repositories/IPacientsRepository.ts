import Pacient from "models/Pacient";
import CreatePacientDTO from '../models/CreatePacientDTO';

export default interface IPacientsRepository {
    findByCPF(cpf: string): Promise<Pacient | undefined>;
    findAllPacients(): Promise<Pacient[]>;
    createPacient(pacient: CreatePacientDTO): Promise<Pacient>;
}