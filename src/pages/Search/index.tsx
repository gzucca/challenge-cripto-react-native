import {TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../redux';
import {
  AddButton,
  AddText,
  AddTextInput,
  AddView,
  ButtonText,
  ContainerView,
  HeaderView,
  TouchableText,
} from './styles';
import {RootStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import CryptCards from '../../components/CryptCards';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
  const {searchCryptos} = bindActionCreators(actionCreators, dispatch);
  const {saveCrypto} = bindActionCreators(actionCreators, dispatch);
  const globalState = useSelector((state: State) => state.cryptos);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const check = globalState.allCryptos.length === 0;
    
    if (check === true) {
      getAllCryptos();
    }
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
          disabled={selected === '' ? true : false}
          onPress={() => saveCrypto(selected)}>
          <ButtonText>Add</ButtonText>
        </AddButton>
      </AddView>
      <CryptCards
        setSelected={setSelected}
        selected={selected}
        cryptosPassed={globalState.searchResult}
      />
    </ContainerView>
  );
};

export default Search;
