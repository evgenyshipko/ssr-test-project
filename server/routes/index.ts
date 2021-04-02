import express, { Request, Response } from 'express';
import { User } from '../models/User';
import { localRoutes } from '../../src/constants';

export const apiRouter = express.Router();

apiRouter.get(
    '/api/users/:id',
    async (request: Request, response: Response) => {
        try {
            const users = await User.findAll({
                where: {
                    id: request.params.id,
                },
            });
            response.json(users);
        } catch (err) {
            response.status(500).json(err);
        }
    }
);

apiRouter.get(
    localRoutes.USERS,
    async (request: Request, response: Response) => {
        try {
            const users = await User.findAll();
            response.json(users);
        } catch (err) {
            response.status(500).json(err);
        }
    }
);

apiRouter.post(
    localRoutes.USERS,
    async (request: Request, response: Response) => {
        try {
            const data = request.body;
            console.log('data', data);
            await User.create(data);
            response.status(200);
        } catch (err) {
            response.status(500).json(err);
        }
    }
);
