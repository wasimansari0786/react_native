import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store/store';
import Cal from './src/screen/Cal';

const App = () => {
  return (
    <Provider store={store}>
      <Cal />
    </Provider>
  );
};

export default App;
