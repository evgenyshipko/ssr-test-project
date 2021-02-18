import { kea } from 'kea';
import { INotification, Nullable } from '@src/stores/redux/store/types';

export const notificationLogic = kea({
    actions: {
        showNotification: (data: Nullable<INotification>) => ({
            data,
        }),
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
                showNotification: (
                    _state: boolean,
                    { data }: { data: Nullable<INotification> }
                ) => data,
                hideNotification: () => null,
            },
        ],
    },
    thunks: ({ actions, _dispatch, _getState }: any) => ({
        toggleNotification: async (data: Nullable<INotification>) => {
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
