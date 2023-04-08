import {TouchableHighlight, View} from 'react-native';
import React from 'react';
import CryptCard from '../CryptCard';
import {ListScrollView} from './styles';
import {CryptCardsProps} from '../../../types';

const CryptCards = (props: CryptCardsProps) => (
    <View>
      <ListScrollView>
        {props.cryptosPassed.length > 0 &&
          props.cryptosPassed.map(crypto => {
            return (
              <TouchableHighlight
                key={crypto.id}
                onPress={() =>
                  props.selected === crypto.id
                    ? props.setSelected('')
                    : props.setSelected(crypto.id)
                }>
                <CryptCard
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  image={`https://asset-images.messari.io/images/${crypto.id}/64.png?v=2`}
                  priceUsd={crypto.priceUsd}
                  percentChange24hs={crypto.percentChange24hs}
                  onSelect={crypto.id === props.selected ? true : false}
                />
              </TouchableHighlight>
            );
          })}
      </ListScrollView>
    </View>
  );
export default CryptCards;
