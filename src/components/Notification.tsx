import React, { useEffect } from 'react';
import { useValues } from 'kea';
import { notificationLogic } from '@src/logic/notification';

const Notification = () => {
    const { disabled, data } = useValues(notificationLogic);

    useEffect(() => {
        console.log('render Notification', data);
    }, [disabled, data]);

    return (
        <div
            className="notification"
            style={{
                display: disabled ? 'none' : undefined,
            }}
        >
            {data?.text}
        </div>
    );
};

export default Notification;
