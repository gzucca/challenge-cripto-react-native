import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import CryptCards from '../../components/CryptCards';
import {
  ContainerView,
  HeaderImage,
  HeaderText,
  HeaderView,
  ListScrollView,
  TouchableText,
  WarnText,
} from './styles';
import { useTheme  } from 'styled-components'

const Main = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme()
  const toggleCards = () => {
    setOpen((open) => !open);
  };

  return (
    <View>
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
        <TouchableHighlight onPress={toggleCards} underlayColor={theme.grey}>
          <TouchableText>+ Add a Cryptocurrency</TouchableText>
        </TouchableHighlight>
      </ListScrollView>
    </View>
  );
};

export default Main;
