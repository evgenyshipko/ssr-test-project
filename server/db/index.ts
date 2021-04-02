import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const sequelizeOptions: SequelizeOptions = {
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DS_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);
