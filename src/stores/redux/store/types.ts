export type NotificationState = {
    item: Nullable<INotification>;
    isHidden: boolean;
};

export type AllStateType = {
    notification: NotificationState;
    counter: number;
};

export type Nullable<T> = T | null;

export interface INotification {
    type: 'info' | 'success' | 'warning';
    text: string;
    duration: number;
}
