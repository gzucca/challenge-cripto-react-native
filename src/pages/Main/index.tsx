import {SafeAreaView, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
import CryptCards from '../../components/CryptCards';
import {
  ColumnView,
  ComponentView,
  HeaderImage,
  HeaderText,
  HeaderView,
  ListScrollView,
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
import TrashCanDelete from './../../../assets/icons/delete_black_24dp.svg';
import {useTheme} from 'styled-components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
  const theme = useTheme();
  const globalState = useSelector((state: State) => state.cryptos);
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();
  const {deleteCrypto} = bindActionCreators(actionCreators, dispatch);

  return (
    <ComponentView>
      <HeaderView>
        <ColumnView>
          <RowView>
            <HeaderText>CryptoTracker Pro</HeaderText>
            <HeaderImage
              source={require('../../../assets/profilePhoto.jpeg')}></HeaderImage>
          </RowView>
          <TrashCanTouchable onPress={() => deleteCrypto(selected)}>
            <TrashCanDelete
              width={24}
              height={24}
              fill={theme.white}></TrashCanDelete>
          </TrashCanTouchable>
        </ColumnView>
      </HeaderView>
      <SafeAreaView>
        {globalState.userCryptos.length > 0 ? (
          <CryptCards
            setSelected={setSelected}
            selected={selected}
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
