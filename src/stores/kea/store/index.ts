import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';

resetContext({
    createStore: {},
    plugins: [thunkPlugin],
});

export default getContext().store;
