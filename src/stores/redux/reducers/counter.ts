const actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};

export function counterReducer(
    state: number = 0,
    action: { type: string }
): number {
    const { type } = action;
    switch (type) {
        case actions.INCREMENT:
            return state + 1;
        case actions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export function increaseCounter() {
    return {
        type: actions.INCREMENT,
    };
}

export function decreaseCounter() {
    return {
        type: actions.DECREMENT,
    };
}
