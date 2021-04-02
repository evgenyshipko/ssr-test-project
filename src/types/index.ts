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

export type UserAttributes = {
    first_name: string;
    last_name: string;
    birthday?: string;
    email?: string;
    phone?: string;
    DepartmentId?: number;
};
