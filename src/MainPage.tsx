import { useHistory } from 'react-router';
import React from 'react';

export const MainPage = () => {
    const history = useHistory();

    return (
        <>
            <button
                onClick={() => {
                    history.push('/redux');
                }}
            >
                redux
            </button>
            <button
                onClick={() => {
                    history.push('/kea');
                }}
            >
                kea
            </button>
            <button
                onClick={() => {
                    history.push('/mobx');
                }}
            >
                mobx
            </button>
        </>
    );
};
