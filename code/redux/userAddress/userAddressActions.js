import {CITY_UPDATED} from './userAddressTypes';

export const updateCity = city => {
  return {
    type: CITY_UPDATED,
    payload: city,
  };
};
