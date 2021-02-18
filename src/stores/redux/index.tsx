import React from 'react';

import Notification from './components/Notification';
import {
    hideNotification,
    showNotification,
} from '@src/stores/redux/reducers/notification';
import Counter from './components/CounterBlock';
import { Provider, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import store from '@src/stores/redux/store';

const ReduxPage = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Notification />
            <button
                onClick={() => {
                    dispatch(function (dispatch: ThunkDispatch<any, any, any>) {
                        dispatch(
                            showNotification({
                                text: 'Privet!',
                                type: 'success',
                                duration: 5,
                            })
                        );
                        setTimeout(() => {
                            dispatch(hideNotification());
                        }, 2000);
                    });
                }}
            >
                Show notification
            </button>
            <Counter />
        </div>
    );
};

const WrappedReduxPage = () => {
    return (
        <Provider store={store}>
            <ReduxPage />
        </Provider>
    );
};

export default WrappedReduxPage;
