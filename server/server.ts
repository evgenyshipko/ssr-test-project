import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import { serverMiddleware } from './middlewares/server-render-middleware';
import { getHmrMiddlewares } from './middlewares/hmr-middleware';
import { IS_DEV } from '../webpack/env';
import { sequelize } from './db';
import { User } from './models/User';
import { Department } from './models/Department';
import { apiRouter } from './routes';

try {
    sequelize
        .authenticate()
        .then(async () => {
            console.log('Connection to db has been established successfully.');
            await Department.sync({ alter: true });
            await User.sync({ alter: true });
        })
        .then(() => {
            console.log('Database instances updated!');
        });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(compression());
app.use(express.json());

if (!IS_DEV) {
    app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.use(express.static(path.resolve(__dirname, '../static')));

app.use(apiRouter);

if (IS_DEV) {
    app.use(...getHmrMiddlewares());
}

app.get('/*', serverMiddleware);

export { app };
