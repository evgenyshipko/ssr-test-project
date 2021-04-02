import DataTypes from 'sequelize';
import { Department } from './Department';
import { sequelize } from '../db';

export const User = sequelize.define(
    'User',
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

Department.hasMany(User);
