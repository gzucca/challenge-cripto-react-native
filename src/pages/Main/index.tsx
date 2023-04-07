import {TouchableHighlight} from 'react-native';
import React from 'react';
import CryptCards from '../../components/CryptCards';
import {
  ComponentView,
  ContainerView,
  HeaderImage,
  HeaderText,
  HeaderView,
  ListScrollView,
  TouchableText,
  TouchableView,
  WarnText,
} from './styles';
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {State} from '../../redux';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
  const globalState = useSelector((state: State) => state.cryptos);

  return (
    <ComponentView>
      <HeaderView>
        <ContainerView>
          <HeaderText>CryptoTracker Pro</HeaderText>
          <HeaderImage
            source={require('../../../assets/profilePhoto.jpeg')}></HeaderImage>
        </ContainerView>
      </HeaderView>
      <ListScrollView>
        {globalState.userCryptos.length > 0 ? (
          <CryptCards />
        ) : (
          <WarnText>No Cryptocurrency loaded</WarnText>
        )}
        <TouchableView>
          <TouchableHighlight
            onPress={() => navigation.navigate('Search')}
            underlayColor={'grey'}>
            <TouchableText>+ Add a Cryptocurrency</TouchableText>
          </TouchableHighlight>
        </TouchableView>
      </ListScrollView>
    </ComponentView>
  );
};

export default Main;
