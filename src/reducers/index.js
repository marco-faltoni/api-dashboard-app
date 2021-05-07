import {combineReducers} from 'redux';
import localReducer from './LocalReducers';

const rootReducers = combineReducers ({
    store: localReducer,
});

export default rootReducers;