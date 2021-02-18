import React, { useEffect } from 'react';
import { useActions, useValues } from 'kea';
import { counterLogic } from '@src/stores/kea/logic/counter';

export const Counter = () => {
    const { increase, decrease, reload, setCounter } = useActions(counterLogic);
    const { counter } = useValues(counterLogic);

    useEffect(() => {
        console.log('render counter');
    }, [counter]);

    return (
        <div>
            <div>count: {counter}</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reload}>reload</button>
            <button onClick={() => setCounter(1000)}>setCounter</button>
        </div>
    );
};
