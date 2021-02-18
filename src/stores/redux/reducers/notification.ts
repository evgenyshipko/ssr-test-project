import {
    INotification,
    NotificationState,
} from '@src/stores/redux/store/types';

interface ItemActionType {
    type: string;
    payload: NotificationState;
}

const actions = {
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
};

export function notificationReducer(
    state: NotificationState = { item: null, isHidden: true },
    action: ItemActionType
): NotificationState {
    const { payload, type } = action;
    if (payload) {
        const { item, isHidden } = payload;
        switch (type) {
            case actions.SHOW_NOTIFICATION:
            case actions.HIDE_NOTIFICATION:
                return {
                    ...state,
                    item,
                    isHidden,
                };
            default:
                return state;
        }
    }
    return state;
}

export function showNotification(
    notificationData: INotification
): ItemActionType {
    return {
        type: actions.SHOW_NOTIFICATION,
        payload: { item: notificationData, isHidden: false },
    };
}

export function hideNotification(): ItemActionType {
    return {
        type: actions.HIDE_NOTIFICATION,
        payload: { item: null, isHidden: true },
    };
}
