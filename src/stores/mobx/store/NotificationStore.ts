import { makeAutoObservable } from 'mobx';
import { INotification, Nullable } from '@src/stores/redux/store/types';

class NotificationStore {
    disabled: boolean = true;

    data: Nullable<INotification> = null;

    constructor() {
        makeAutoObservable(this);
    }

    showNotification(data: INotification) {
        this.data = data;
        this.disabled = false;
    }

    hideNotification() {
        this.data = null;
        this.disabled = true;
    }

    toggleNotification(data: INotification) {
        this.showNotification(data);
        setTimeout(() => {
            this.hideNotification();
        }, data.duration);
    }
}

const notificationStore = new NotificationStore();
export default notificationStore;
