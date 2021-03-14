export interface INotification {
    text: string;
    type: string;
    duration: number;
}

export type Nullable<T> = null | T;

declare global {
    interface Window {
        __INITIAL_STATE__: any;
    }
}
