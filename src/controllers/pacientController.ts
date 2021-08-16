import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PacientService from '../services/PacientService';

class PacientController {

    public async read(request: Request, response: Response): Promise<Response> {
        const { cpf } = request.body;
        
        const pacient = container.resolve(PacientService)
        const findPacient = await pacient.findPacientByCPF(cpf);

        return response.json(findPacient);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const pacient = container.resolve(PacientService)
        const pacients = await pacient.getPacients();

        return response.json(pacients);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const pacient = container.resolve(PacientService);
        
        const newPacient = await pacient.createNewPacient(request.body);

        return response.json(newPacient);
    }
}

export default PacientController;