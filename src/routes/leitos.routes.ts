import { Request, Router } from 'express';

import LeitoController from '../controllers/leitoController';

const leitosRouter = Router();
const leitoController = new LeitoController();

leitosRouter.get('/show', leitoController.show);
leitosRouter.post('/', leitoController.create);
leitosRouter.put('/', leitoController.update);

export default leitosRouter;