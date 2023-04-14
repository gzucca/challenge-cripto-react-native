import AsyncStorage from '@react-native-async-storage/async-storage';
import {CryptoObject} from './types';

export const setUserCrypto = async (value: CryptoObject[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storageUserCryptos', jsonValue);
  } catch (e) {
    throw e;
  }
};
