import AsyncStorage from '@react-native-community/async-storage';

export const asyncStorageKeys = {
  todos: 'todos',
};

export const _storeData = async (
  key: string,
  valueToSend: any,
): Promise<void> => {
  try {
    if (typeof valueToSend === 'object') {
      valueToSend = JSON.stringify(valueToSend);
    }
    await AsyncStorage.setItem(key, valueToSend);
  } catch (error) {
    console.log('[_storeData] ERROR: ', error);
  }
};

export const _removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('[_removeData] ERROR: ', error);
  }
};

export const _getData = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('[_getData] ERROR: ', error);
  }
};
