import {createStore, combineReducers} from 'redux';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userAddressReducer from './userAddress/userAddressReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  userAddress: userAddressReducer,
});

const store = createStore(rootReducer);

export default store;
