import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '@src/stores/redux/reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
