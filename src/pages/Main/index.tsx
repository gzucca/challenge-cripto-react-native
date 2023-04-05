import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Main = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const toggleCards = () => {
    setOpen((open) => !open);
  };

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
        {open ? (
          <CryptCards></CryptCards>
        ) : (
          <WarnText>No Cryptocurrency loaded</WarnText>
        )}
        <TouchableHighlight onPress={() => navigation.navigate('Search')} underlayColor={'grey'}>
          <TouchableText>+ Add a Cryptocurrency</TouchableText>
        </TouchableHighlight>
      </ListScrollView>
    </ComponentView>
  );
};

export default Main;
