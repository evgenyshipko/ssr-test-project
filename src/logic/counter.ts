import { kea } from 'kea';
import { counterLogicType } from '@src/logic/counterType';

export const counterLogic = kea<counterLogicType>({
    actions: {
        increase: true,
        decrease: true,
        reload: true,
        setCounter: (count: number) => ({ count }),
    },
    reducers: {
        counter: [
            0,
            {
                increase: (state: number) => state + 1,
                decrease: (state: number) => state - 1,
                reload: () => 0,
                setCounter: (_state: number, { count }: { count: number }) =>
                    count,
            },
        ],
    },
});
