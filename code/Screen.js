import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {orderCake, restockCake} from './redux/cake/cakeActions';
import {orderIceCream, restockIceCream} from './redux/iceCream/iceCreamActions';

const Screen = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>No. of cakes = {numOfCakes}</Text>
        <Button title="Order Cake" onPress={() => dispatch(orderCake())} />
        <Button title="Restock Cake" onPress={() => dispatch(restockCake())} />
      </View>
      <View style={{height: 10}} />
      <View style={styles.container}>
        <Text>No. of ice creams = {numOfIceCreams}</Text>
        <Button
          title="Order Ice Cream"
          onPress={() => dispatch(orderIceCream())}
        />
        <Button
          title="Restock Ice Cream"
          onPress={() => dispatch(restockIceCream())}
        />
      </View>
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
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
  },
});

export default Screen;
