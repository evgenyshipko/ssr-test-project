import React, { FC, useEffect } from 'react';
import notificationStore from '@src/stores/mobx/store/NotificationStore';
import { observer } from 'mobx-react';

type Props = {
    store: typeof notificationStore;
};

export const Notification: FC<Props> = observer((props) => {
    useEffect(() => {
        console.log('render notification');
    }, [props.store.disabled]);

    return (
        <div
            className="notification"
            style={{
                display: props.store.disabled ? 'none' : undefined,
            }}
        >
            {props.store.data?.text}
        </div>
    );
});
