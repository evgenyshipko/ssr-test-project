import React from 'react';
import { Counter } from '@src/stores/kea/components/Counter';
import { Provider } from 'react-redux';
import store from '@src/stores/kea/store';
import Notification from '@src/stores/kea/components/Notification';

import { useActions } from 'kea';
import { notificationLogic } from '@src/stores/kea/logic/notification';
import { INotification } from '@src/stores/redux/store/types';

const KeaPage = () => {
    // @ts-ignore
    const { toggleNotification } = useActions(notificationLogic);

    const notificationData: INotification = {
        text: 'Privet!',
        type: 'success',
        duration: 200,
    };

    return (
        <div>
            <Notification />
            <button onClick={() => toggleNotification(notificationData)}>
                Show notification
            </button>
            <Counter />
        </div>
    );
};

const WrappedKeaPage = () => {
    return (
        <Provider store={store}>
            <KeaPage />
        </Provider>
    );
};

export default WrappedKeaPage;
