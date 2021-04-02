import DataTypes from 'sequelize';
import { sequelize } from '../db';

export const Department = sequelize.define(
    'Department',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
