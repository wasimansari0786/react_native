import React from 'react';
import {Provider} from 'react-redux'; // Import Provider from 'react-redux'
import store from './src/Redux/store/store'; // Import your Redux store
import AppNavigation from './src/navigation/AppNavigation';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
