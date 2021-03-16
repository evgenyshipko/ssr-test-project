import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import { serverMiddleware } from './server-render-middleware';

import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import clientConfig from '../webpack/client.config';

const app = express();

app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')));

const compiler = webpack({ ...clientConfig, mode: 'development' });
app.use(
    devMiddleware(compiler, {
        publicPath: clientConfig.output!.publicPath! as string,
    })
);
app.use(
    hotMiddleware(compiler, {
        log: false,
        heartbeat: 2000,
    })
);

app.get('/*', serverMiddleware);

export { app };
