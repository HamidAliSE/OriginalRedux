import {createStore} from 'redux';

export const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
