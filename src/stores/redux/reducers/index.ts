import { combineReducers } from 'redux';
import { notificationReducer } from '@src/stores/redux/reducers/notification';
import { counterReducer } from '@src/stores/redux/reducers/counter';

export default combineReducers({
    notification: notificationReducer,
    counter: counterReducer,
});
