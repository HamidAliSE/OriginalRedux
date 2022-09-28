import React from 'react';
import {Provider} from 'react-redux';

import Screen from './code/Screen';
import store from './code/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;
