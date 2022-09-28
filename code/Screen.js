import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CAKE_ORDERED } from './redux/cake/cakeTypes';
import { orderCake } from './redux/cake/cakeActions';

import store from './redux/store';

const Screen = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector(state => state.numOfCakes);
  console.log('Initial State *** : ', store.getState())
  return (
    <View style={styles.screen}>
        <Text>No. of cakes = {numOfCakes}</Text>
        <Button
          title="Order Cake"
          onPress={() => dispatch(orderCake())}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Screen;
