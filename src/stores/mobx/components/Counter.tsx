import React, { FC, useEffect } from 'react';
import { counterStore } from '@src/stores/mobx/store/CounterStore';
import { observer } from 'mobx-react';

type CounterProps = {
    store: typeof counterStore;
};

export const Counter: FC<CounterProps> = observer((props) => {
    useEffect(() => {
        console.log('render counter');
    }, [props.store.count]);

    return (
        <div>
            <div>count: {props.store.count}</div>
            <button onClick={() => props.store.decrease()}>increase</button>
            <button onClick={() => props.store.increase()}>decrease</button>
            <button onClick={() => props.store.reload()}>reload</button>
            <button onClick={() => props.store.setCounter(1000)}>
                setCounter
            </button>
        </div>
    );
});
