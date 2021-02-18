// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea'

export interface counterLogicType extends Logic {
    actionCreators: {
        increase: () => {
            type: 'increase (src.stores.kea.logic.counter)';
            payload: {
                value: boolean;
            };
        };
        decrease: () => {
            type: 'decrease (src.stores.kea.logic.counter)';
            payload: {
                value: boolean;
            };
        };
        reload: () => {
            type: 'reload (src.stores.kea.logic.counter)';
            payload: {
                value: boolean;
            };
        };
        setCounter: (
            count: number
        ) => {
            type: 'set counter (src.stores.kea.logic.counter)';
            payload: {
                count: number;
            };
        };
    };
    actionKeys: {
        'increase (src.stores.kea.logic.counter)': 'increase';
        'decrease (src.stores.kea.logic.counter)': 'decrease';
        'reload (src.stores.kea.logic.counter)': 'reload';
        'set counter (src.stores.kea.logic.counter)': 'setCounter';
    };
    actionTypes: {
        increase: 'increase (src.stores.kea.logic.counter)';
        decrease: 'decrease (src.stores.kea.logic.counter)';
        reload: 'reload (src.stores.kea.logic.counter)';
        setCounter: 'set counter (src.stores.kea.logic.counter)';
    };
    actions: {
        increase: () => void;
        decrease: () => void;
        reload: () => void;
        setCounter: (count: number) => void;
    };
    constants: {};
    defaults: {
        counter: number;
    };
    events: {};
    key: undefined;
    listeners: {};
    path: ['src', 'stores', 'kea', 'logic', 'counter'];
    pathString: 'src.stores.kea.logic.counter';
    props: Record<string, unknown>;
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        counter: number;
    };
    reducerOptions: {};
    reducers: {
        counter: (state: number, action: any, fullState: any) => number;
    };
    selector: (
        state: any
    ) => {
        counter: number;
    };
    selectors: {
        counter: (state: any, props?: any) => number;
    };
    sharedListeners: {};
    values: {
        counter: number;
    };
    _isKea: true;
    _isKeaWithKey: false;
}
