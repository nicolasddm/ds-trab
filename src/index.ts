import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes/index';

import './container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);