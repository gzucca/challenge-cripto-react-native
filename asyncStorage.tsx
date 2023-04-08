import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserCrypto = async (value : string[]) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storageUserCryptos', jsonValue)
  } catch(e) {
    console.log( e);
  }

}


