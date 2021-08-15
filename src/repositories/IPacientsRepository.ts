import Pacient from "models/Pacient";

export default interface IPacientsRepository {
    findByCPF(cpf: string): Promise<Pacient | undefined>;
    findAll(): Promise<Pacient[] | undefined>;
}