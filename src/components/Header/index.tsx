import React from 'react';
import './style.css';
import { useHistory } from 'react-router';
import { routes } from '@src/routes';

export const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            {routes.map((data, index) => (
                <button key={index} onClick={() => history.push(data.path)}>
                    {data.title}
                </button>
            ))}
        </div>
    );
};
