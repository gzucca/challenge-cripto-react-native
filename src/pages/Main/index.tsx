import {SafeAreaView, TouchableHighlight, View} from 'react-native';
import React, {useEffect} from 'react';
import CryptCards from '../../components/CryptCards';
import {
  ColumnView,
  ComponentView,
  HeaderImage,
  HeaderText,
  HeaderView,
  RowView,
  TouchableText,
  TouchableView,
  TrashCanTouchable,
  WarnText,
} from './styles';
import {CryptoObject, RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import {useTheme} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAPITime, getCurrentTime} from '../../../getTime';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
  const theme = useTheme();
  const globalState = useSelector((state: State) => state.cryptos);
  const dispatch = useDispatch();
  const {loadUserCrypto} = bindActionCreators(actionCreators, dispatch);
  const {updateUserCrypto} = bindActionCreators(actionCreators, dispatch);

  const getUserCrypto = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storageUserCryptos');
      if (jsonValue) {
        const storedArray = JSON.parse(jsonValue);
        storedArray.forEach((crypto: CryptoObject) => {
          const check = getCurrentTime() === getAPITime(crypto.timeStamp);

          if (check === false) {
            updateUserCrypto(crypto.id);
          } else {
            loadUserCrypto(crypto);
          }
        });
      }
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getUserCrypto();
  }, []);

  return (
    <ComponentView>
      <HeaderView>
        <ColumnView>
          <RowView>
            <HeaderText>CryptoTracker Pro</HeaderText>
            <HeaderImage
              source={require('../../../assets/profilePhoto.jpeg')}></HeaderImage>
          </RowView>
        </ColumnView>
      </HeaderView>
      <SafeAreaView>
        {globalState.userCryptos.length > 0 ? (
          <CryptCards cryptosPassed={globalState.userCryptos} />
        ) : (
          <WarnText>No Cryptocurrency loaded</WarnText>
        )}
        <TouchableView>
          <TouchableHighlight
            onPress={() => navigation.navigate('Search')}
            underlayColor={theme.grey}>
            <TouchableText>+ Add a Cryptocurrency</TouchableText>
          </TouchableHighlight>
        </TouchableView>
      </SafeAreaView>
    </ComponentView>
  );
};

export default Main;
