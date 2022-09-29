import {ICE_CREAM_ORDERED, ICE_CREAM_RESTOCKED} from './iceCreamTypes';

export const orderIceCream = () => {
  return {
    type: ICE_CREAM_ORDERED,
  };
};

export const restockIceCream = () => {
  return {
    type: ICE_CREAM_RESTOCKED,
  };
};
