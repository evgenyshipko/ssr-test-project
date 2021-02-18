import React from 'react';
import { Counter } from '@src/stores/mobx/components/Counter';
import { counterStore } from '@src/stores/mobx/store/CounterStore';
import { Notification } from '@src/stores/mobx/components/Notification';
import notificationStore from '@src/stores/mobx/store/NotificationStore';

export const MobxPage = () => {
    return (
        <>
            <Notification store={notificationStore} />
            <button
                onClick={() => {
                    notificationStore.toggleNotification({
                        text: 'Privet!',
                        type: 'success',
                        duration: 200,
                    });
                }}
            >
                Show notification
            </button>
            <Counter store={counterStore} />
        </>
    );
};
