import {StyleSheet, View} from 'react-native';
import React from 'react';

import CryptCard from './CryptCard';

type Props = {};

const CryptCards = (props: Props) => {
  return (
    <View>
      <CryptCard></CryptCard>
    </View>
  );
};

export default CryptCards;

const styles = StyleSheet.create({});
