import React from 'react';
import './style.css';
import { useHistory } from 'react-router';

export const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <button onClick={() => history.push('/counter')}>Counter</button>
            <button onClick={() => history.push('/')}>Notification</button>
        </div>
    );
};
