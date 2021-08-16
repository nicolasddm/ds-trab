import { Router } from 'express';
import pacientsRouter from './pacients.routes';
import leitosRouter from './leitos.routes';

const routes = Router();

routes.use('/pacients', pacientsRouter);
routes.use('/leitos', leitosRouter);

export default routes;
