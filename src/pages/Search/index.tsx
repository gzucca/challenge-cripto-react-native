import {TouchableHighlight, Alert} from 'react-native';
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
import {useTheme} from 'styled-components';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({route, navigation}: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
  const {searchCryptos} = bindActionCreators(actionCreators, dispatch);
  const {saveCrypto} = bindActionCreators(actionCreators, dispatch);
  const globalState = useSelector((state: State) => state.cryptos);
  const [focus, setFocus] = useState(false);

  const showAlert = () =>
    Alert.alert(
      'No cryptocurrency found',
      'Please enter the full name or ticker symbol. E.g.: "Bitcoin" or "BTC"',
    );

  const handleSaveCrypto = () => {
    const check = globalState.searchResult.length === 1;
    if (check === true) {
      saveCrypto();
    } else {
      showAlert();
    }
  };

  useEffect(() => {
    getAllCryptos();
    return () => {};
  }, []);

  return (
    <ContainerView>
      <HeaderView>
        <TouchableHighlight
          onPress={() => navigation.navigate('Home')}
          underlayColor={theme.grey}>
          <TouchableText>{'< Back to list'}</TouchableText>
        </TouchableHighlight>
      </HeaderView>
      <AddView>
        <AddText>Add a Cryptocurrency</AddText>
        <AddTextInput
          placeholder="Use a name or ticker symbol..."
          placeholderTextColor={theme.grey}
          onChangeText={e => searchCryptos(e)}
          onFocus={() => setFocus(true)}
          focus={focus}
        />
        <AddButton onPress={() => handleSaveCrypto()}>
          <ButtonText focus={focus}>Add</ButtonText>
        </AddButton>
      </AddView>
    </ContainerView>
  );
};

export default Search;
