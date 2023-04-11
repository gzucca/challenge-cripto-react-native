import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';

const reducers = combineReducers({
  cryptos: cryptosReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
