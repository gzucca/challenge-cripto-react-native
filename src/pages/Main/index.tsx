import {SafeAreaView, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
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
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import {useTheme} from 'styled-components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
  const theme = useTheme();
  const globalState = useSelector((state: State) => state.cryptos);

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
          <CryptCards
            cryptosPassed={globalState.userCryptos}
          />
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
