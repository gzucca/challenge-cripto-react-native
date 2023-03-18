import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import crypto from '../../metrics.json';
import CryptCard from './CryptCard';

type Props = {};

const CryptCards = (props: Props) => {
  return (
    <FlatList
      data={crypto}
      renderItem={({item: crypt}) => (
        <CryptCard {...crypt}></CryptCard>
      )}/>
  );
};

export default CryptCards;

const styles = StyleSheet.create({});
