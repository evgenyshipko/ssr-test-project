import { kea } from 'kea';
import axios from 'axios';

export const currencyLogic = kea({
    actions: {
        setCourse: (count: number) => ({ count }),
    },
    reducers: {
        rub: [
            0,
            {
                setCourse: (_state: number, { count }: { count: number }) =>
                    count,
            },
        ],
    },
    thunks: ({ actions, _dispatch, _getState }: any) => ({
        fetchCourse: async () => {
            const url = 'https://api.exchangeratesapi.io/latest?base=USD';
            return axios
                .get(url)
                .then((res) => res.data)
                .then((data) => {
                    const rub = data.rates.RUB;
                    console.log('fetchCourse rub', rub);
                    actions.setCourse(rub);
                });
        },
    }),
});
