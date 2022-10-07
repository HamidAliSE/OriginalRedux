import {produce} from 'immer';

import {CITY_UPDATED} from './userAddressTypes';

const initialState = {
  name: 'Hamid',
  address: {
    block: 4,
    street: 9,
    house: 133,
    city: 'Lahore',
    area: 'Kareem Park',
    country: 'Pakistan',
  },
};

const userAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY_UPDATED:
      // Without Immer
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     city: action.payload,
      //   },
      // };

      // With Immer
      return produce(state, draft => {
        draft.address.city = action.payload;
      });
    default:
      return state;
  }
};

export default userAddressReducer;
