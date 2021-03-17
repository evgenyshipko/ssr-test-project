import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import { serverMiddleware } from './server-render-middleware';
import { getHmrMiddlewares } from '@src/hmr-middleware';

const app = express();

app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')))
    .use(...getHmrMiddlewares());

app.get('/*', serverMiddleware);

export { app };
