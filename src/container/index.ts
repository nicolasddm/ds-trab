import { container } from 'tsyringe';

import IPacientsRepository from '../repositories/IPacientsRepository'
import PacientsRepository from '../repositories/implements/PacientsRepository';

import ILeitosRepository from '../repositories/ILeitosRepository'
import LeitosRepository from '../repositories/implements/LeitosRepository';

container.registerSingleton<IPacientsRepository>(
  'PacientsRepository',
  PacientsRepository,
);

container.registerSingleton<ILeitosRepository>(
  'LeitosRepository',
  LeitosRepository,
);