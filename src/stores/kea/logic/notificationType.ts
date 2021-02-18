// Auto-generated with kea-typegen. DO NOT EDIT!

import { Logic } from 'kea';

export interface notificationLogicType<NotificationType> extends Logic {
    actionCreators: {
        showNotification: (
            data: NotificationType
        ) => {
            type: 'show notification (src.stores.kea.logic.notification)';
            payload: {
                data: NotificationType;
            };
        };
        hideNotification: () => {
            type: 'hide notification (src.stores.kea.logic.notification)';
            payload: {
                value: boolean;
            };
        };
    };
    actionKeys: {
        'show notification (src.stores.kea.logic.notification)': 'showNotification';
        'hide notification (src.stores.kea.logic.notification)': 'hideNotification';
    };
    actionTypes: {
        showNotification: 'show notification (src.stores.kea.logic.notification)';
        hideNotification: 'hide notification (src.stores.kea.logic.notification)';
    };
    actions: {
        showNotification: (data: NotificationType) => void;
        hideNotification: () => void;
    };
    constants: {};
    defaults: {
        disabled: boolean;
        data: null;
    };
    events: {};
    key: undefined;
    listeners: {};
    path: ['src', 'stores', 'kea', 'logic', 'notification'];
    pathString: 'src.stores.kea.logic.notification';
    props: Record<string, unknown>;
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        disabled: boolean;
        data: null;
    };
    reducerOptions: {};
    reducers: {
        disabled: (state: boolean, action: any, fullState: any) => boolean;
        data: (state: null, action: any, fullState: any) => null;
    };
    selector: (
        state: any
    ) => {
        disabled: boolean;
        data: null;
    };
    selectors: {
        disabled: (state: any, props?: any) => boolean;
        data: (state: any, props?: any) => null;
    };
    sharedListeners: {};
    values: {
        disabled: boolean;
        data: NotificationType;
    };
    _isKea: true;
    _isKeaWithKey: false;
}
