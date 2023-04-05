import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import CryptCard from '../../components/CryptCard';
import { ContainerView, HeaderView, ListScrollView, TouchableText } from './styles';



const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
  const globalState = useSelector((state: State) => state.cryptos);

  useEffect(() => {
    getAllCryptos();
  }, []);

  return (
    <ContainerView>
            <HeaderView>
            <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor={'grey'}>
              <TouchableText>{'< Back to list'}</TouchableText>
            </TouchableHighlight>
            </HeaderView>
      <ListScrollView>
        {globalState &&
          globalState.allCryptos.map(crypto => {
            return (
              <CryptCard
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                image={`https://asset-images.messari.io/images/${crypto.id}/64.png?v=2`}
                price={crypto.metrics.market_data.price_usd}
                change={crypto.metrics.market_data.percent_change_usd_last_24_hours}
              />
            );
          })}
      </ListScrollView>
    </ContainerView>
  );
};

export default Search;
