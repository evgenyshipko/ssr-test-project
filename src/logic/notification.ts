import { kea } from 'kea';
import { INotification, Nullable } from '@src/types';
import { notificationLogicType } from '@src/logic/notificationType';

type NotificationType = Nullable<INotification>;

export const notificationLogic = kea<notificationLogicType<NotificationType>>({
    actions: {
        showNotification: (data: NotificationType) => {
            return data
        },
        hideNotification: true,
    },
    reducers: {
        disabled: [
            true,
            {
                showNotification: () => false,
                hideNotification: () => true,
            },
        ],
        data: [
            null,
            {
                // @ts-ignore
                showNotification: (_state, data: NotificationType) => {
                    return data
                },
                hideNotification: () => null,
            },
        ],
    },
    thunks: ({ actions, _dispatch, _getState }: any) => ({
        toggleNotification: async (data: NotificationType) => {
            actions.showNotification(data);
            setTimeout(
                () => {
                    actions.hideNotification();
                },
                data ? data.duration : 2000
            );
        },
    }),
});
