import {TouchableHighlight} from 'react-native';
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
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useTheme  } from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import CryptCard from '../../components/CryptCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const globalState = useSelector((state: State) => state.cryptos);
  const [open, setOpen] = useState(false)
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
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
        {globalState.allCryptos.length === 0 ?
        <WarnText>No Cryptocurrency loaded</WarnText> :
          globalState.allCryptos.map((crypto: any) => {
            return (
                <CryptCard
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  image={`https://asset-images.messari.io/images/${crypto.id}/64.png?v=2`}
                  price={crypto.metrics.market_data.price_usd}
                  change={
                    crypto.metrics.market_data.percent_change_usd_last_24_hours
                  }
                />

            );
          })}
        <TouchableHighlight
          onPress={() => getAllCryptos()}
          underlayColor={theme.grey}>
          <TouchableText>+ Add a Cryptocurrency</TouchableText>
        </TouchableHighlight>
      </ListScrollView>
    </ComponentView>
  );
};

export default Main;
