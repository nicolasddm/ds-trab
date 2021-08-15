import { Request, Router } from 'express';

import PacientController from '../controllers/pacientController';

const pacientsRouter = Router();
const pacientController = new PacientController();

pacientsRouter.get('/', pacientController.read);
pacientsRouter.get('/show', pacientController.show);

export default pacientsRouter;