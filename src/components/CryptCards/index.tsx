import {TouchableHighlight, View} from 'react-native';
import React from 'react';
import CryptCard from '../CryptCard';
import {ListFlatList, ListScrollView} from './styles';
import {CryptCardProps, CryptCardsProps} from '../../../types';

const CryptCards = ({
  cryptosPassed,
  setSelected,
  selected,
}: CryptCardsProps) => {
  const handleSelected = (id: string) => {
    selected === id ? setSelected('') : setSelected(id);
  };

  const Item = ({
    name,
    priceUsd,
    percentChange24hs,
    id,
    symbol,
  }: CryptCardProps) => (
    <TouchableHighlight key={id} onPress={() => handleSelected(id)}>
      <CryptCard
        key={id}
        id={id}
        name={name}
        symbol={symbol}
        image={`https://asset-images.messari.io/images/${id}/64.png?v=2`}
        priceUsd={priceUsd}
        percentChange24hs={percentChange24hs}
        onSelect={id === selected ? true : false}
      />
    </TouchableHighlight>
  );

  const renderItem = ({item}: any) => (
    <Item
      name={item.name}
      key={item.id}
      id={item.id}
      symbol={item.symbol}
      image={item.image}
      priceUsd={item.priceUsd}
      percentChange24hs={item.percentChange24hs}
      onSelect={item.onSelect}
    />
  );

  return (
    <ListFlatList
      data={cryptosPassed}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id}
    />
  );
};
export default CryptCards;
