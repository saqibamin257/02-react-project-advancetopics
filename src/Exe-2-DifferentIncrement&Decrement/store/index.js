import {legacy_createStore  as createStore} from 'redux';
import CountReducer from './reducers/count.reducer';

export default createStore(CountReducer)
