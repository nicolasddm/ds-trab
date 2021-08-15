import { Router } from 'express';
import pacientsRouter from './pacients.routes';

const routes = Router();

routes.use('/pacients', pacientsRouter);

export default routes;
