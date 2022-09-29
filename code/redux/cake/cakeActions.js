import {CAKE_ORDERED, CAKE_RESTOCKED} from './cakeTypes';

export const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

export const restockCake = () => {
  return {
    type: CAKE_RESTOCKED,
  };
};
