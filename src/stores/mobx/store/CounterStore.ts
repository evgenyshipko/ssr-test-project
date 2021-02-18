import { makeAutoObservable } from 'mobx';

class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }

    setCounter(count: number) {
        this.count = count;
    }

    reload() {
        this.count = 0;
    }
}

export const counterStore = new CounterStore();
