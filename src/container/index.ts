import { container } from 'tsyringe';

import IPacientsRepository from '../repositories/IPacientsRepository'
import PacientsRepository from '../repositories/implements/PacientsRepository';

container.registerSingleton<IPacientsRepository>(
  'PacientsRepository',
  PacientsRepository,
);
