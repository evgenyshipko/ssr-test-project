import React from 'react';
import Notification from '@components/Notification';

import { useActions } from 'kea';
import { notificationLogic } from '@src/logic/notification';
import { INotification } from '@src/types';
import './style.css'

export const NotificationPage = () => {
    // @ts-ignore
    const { toggleNotification } = useActions(notificationLogic);

    const notificationData: INotification = {
        text: 'Privet!',
        type: 'success',
        duration: 200,
    };

    return (
        <div className='notification-page'>
            <Notification />
            <button onClick={() => toggleNotification(notificationData)}>
                Show notification
            </button>
        </div>
    );
};
