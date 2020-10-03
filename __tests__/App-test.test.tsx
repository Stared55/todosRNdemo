import AsyncStorage from '@react-native-community/async-storage';
import 'react-native';
import { asyncStorageKeys, _getData } from 'src/utils/asyncStorage';

it('renders correctly', () => {
  // renderer.create(<App />);
});

it('checks if Async Storage is used', async () => {
  await _getData(asyncStorageKeys.todos);
  expect(AsyncStorage.getItem).toBeCalledWith(asyncStorageKeys.todos);
});
