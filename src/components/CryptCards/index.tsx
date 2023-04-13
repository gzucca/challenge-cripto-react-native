import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {CryptCardsProps} from '../../../types';
import {CryptoObject} from '../../../types';
import ListItem from '../ListItem';

const CryptCards = ({
  cryptosPassed,
}: CryptCardsProps) => {



  const renderItem: ListRenderItem<CryptoObject> = ({item}) => (
    <ListItem data={item} />
  );

  return (
    <FlatList
      data={cryptosPassed}
      renderItem={renderItem}
      keyExtractor={(item: CryptoObject) => item.id}
    />
  );
};
export default CryptCards;
