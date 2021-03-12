import React from 'react';
import { history } from '@src/store'
import './style.css'

export const Header = () => (
    <div className='header'>
        <button onClick={() => history.push('/counter')}>Counter</button>
        <button onClick={() => history.push('/')}>Notification</button>
    </div>
)
