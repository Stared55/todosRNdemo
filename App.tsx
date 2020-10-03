import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import RootNavigator from './src/components/navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
