import {TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import CryptCard from '../../components/CryptCard';
import {
  AddButton,
  AddText,
  AddTextInput,
  AddView,
  ButtonText,
  ContainerView,
  HeaderView,
  ListScrollView,
  TouchableText,
} from './styles';
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
  const {searchCryptos} = bindActionCreators(actionCreators, dispatch);
  const {saveCrypto} = bindActionCreators(actionCreators, dispatch);
  const globalState = useSelector((state: State) => state.cryptos);
  const [selected, setSelected] = useState('');


  useEffect(() => {
    getAllCryptos();
    return () => {
      searchCryptos('');
    };
  }, []);

  return (
    <ContainerView>
      <HeaderView>
        <TouchableHighlight
          onPress={() => navigation.navigate('Home')}
          underlayColor={'grey'}>
          <TouchableText>{'< Back to list'}</TouchableText>
        </TouchableHighlight>
      </HeaderView>
      <AddView>
        <AddText>Add a Cryptocurrency</AddText>
        <AddTextInput
          placeholder="Use a name or ticker symbol..."
          placeholderTextColor="lightgrey"
          onChangeText={e => searchCryptos(e)}
        />
        <AddButton
          onPress={() =>
            saveCrypto(selected)
          }>
          <ButtonText>Add</ButtonText>
        </AddButton>
      </AddView>
      <ListScrollView>
        {globalState.searchResult &&
          globalState.searchResult.map((crypto: any) => {
            return (
              <TouchableHighlight
                key={crypto.id}
                onPress={() => setSelected(crypto.id)}>
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
                  onSelect={crypto.id === selected ? true : false}
                />
              </TouchableHighlight>
            );
          })}
      </ListScrollView>
    </ContainerView>
  );
};

export default Search;
