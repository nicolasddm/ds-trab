import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes/index';

import './database';

import './container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);