import { Request, Response } from 'express';
import { container } from 'tsyringe';

import LeitoService from '../services/LeitoService';

class LeitoController {

    // public async read(request: Request, response: Response): Promise<Response> {
    //     const { cpf } = request.body;
        
    //     const leitoService = container.resolve(LeitoService)
    //     const findLeito = await leitoService.findLeitoById(cpf);

    //     return response.json(findLeito);
    // }

    public async show(request: Request, response: Response): Promise<Response> {
        const leitoService = container.resolve(LeitoService)
        const leitos = await leitoService.getLeitos();

        return response.json(leitos);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const leitoService = container.resolve(LeitoService);
        
        const newLeitos = await leitoService.createNewLeito(request.body);

        return response.json(newLeitos);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const leitoService = container.resolve(LeitoService);
        
        const updatedLeito = await leitoService.updateLeitos(request.body);

        return response.json(updatedLeito);
    }
}

export default LeitoController;