import React from 'react';
import axios from 'axios';
import { localRoutes } from '@src/constants';
import './style.css';
import { UserAttributes } from '@src/types';

const BASE_URL = 'http://localhost:9001';

const getUsers = () => {
    const url = BASE_URL + localRoutes.USERS;
    return axios.get(url).then((res) => {
        console.log('USERS:', res);
    });
};

const setUser = () => {
    const url = BASE_URL + localRoutes.USERS;
    const userData: UserAttributes = {
        first_name: 'testUserName',
        last_name: 'testUserLast',
        phone: '+789909078',
        DepartmentId: 1,
    };
    return axios
        .post(url, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
            console.log('user added');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const UsersPage = () => (
    <div className="users-page">
        <button onClick={getUsers}>Вывести юзеров в консоль</button>
        <button onClick={setUser}>Добавить юзера в таблицу</button>
    </div>
);
