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
  WarnText,
} from './styles';
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
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
        <WarnText>No Cryptocurrency loaded</WarnText>
        <TouchableHighlight
          onPress={() => navigation.navigate('Search')}
          underlayColor={'grey'}>
          <TouchableText>+ Add a Cryptocurrency</TouchableText>
        </TouchableHighlight>
      </ListScrollView>
    </ComponentView>
  );
};

export default Main;
