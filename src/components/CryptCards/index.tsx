import {TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CryptCard from '../CryptCard';
import {ListScrollView} from './styles';
import {actionCreators, State} from '../../redux';
import {bindActionCreators} from 'redux';

const CryptCards = () => {
  // const dispatch = useDispatch();
  const globalState = useSelector((state: State) => state.cryptos);
  const [selected, setSelected] = useState('');
  // const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);

  // useEffect(() => {
  //   getAllCryptos();

  // }, []);

  return (
    <View>
      <ListScrollView>
        {globalState.userCryptos &&
          globalState.userCryptos.map((crypto) => {
            return (
              <TouchableHighlight
                key={crypto.id}
                onPress={() =>
                  selected === crypto.id ? setSelected('') : setSelected(crypto.id)
                }>
                <CryptCard
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  image={`https://asset-images.messari.io/images/${crypto.id}/64.png?v=2`}
                  price={crypto.priceUsd}
                  change={
                    crypto.percentChange24hs
                  }
                  onSelect={crypto.id === selected ? true : false}
                />
              </TouchableHighlight>
            );
          })}
      </ListScrollView>
    </View>
  );
};
export default CryptCards;
