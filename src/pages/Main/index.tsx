import {TouchableHighlight, View} from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main = ({route, navigation}: Props) => {
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
              fill={'white'}></TrashCanDelete>
          </TrashCanTouchable>
        </ColumnView>
      </HeaderView>
      <ListScrollView>
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
            underlayColor={'grey'}>
            <TouchableText>+ Add a Cryptocurrency</TouchableText>
          </TouchableHighlight>
        </TouchableView>
      </ListScrollView>
    </ComponentView>
  );
};

export default Main;
