// App.js
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './src/Redux/store/store';
 
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}