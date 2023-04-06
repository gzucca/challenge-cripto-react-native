import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import crypto from '../../../metrics.json';
import PercentChangeArrow from '../../../assets/icons/north_east_black_24dp.svg';
import {
  ContainerView,
  PercentChangeNumber,
  PercentChangeView,
  ColView,
  LeftColTextView,
  RightColTextView,
  CryptImage,
  ThemedText,
} from './styles';

type Props = {
  image: string;
  name: string;
  price: number;
  change: number;
  id: string;
  symbol: string;
  onSelect: boolean;
};

const CryptCard = (props: Props) => {
  const percentageChange = (percentNumber: number) => {
    const roundNumber = Number(percentNumber.toFixed(2));
    const negative = roundNumber < 0;

    return (
      <PercentChangeView>
        <PercentChangeArrow
          width={16}
          height={16}
          rotation={negative ? 180 : 0}
          fill={negative ? 'red' : 'green'}
        />
        <PercentChangeNumber negative={negative}>
          {(negative ? -roundNumber : roundNumber) + '%'}
        </PercentChangeNumber>
      </PercentChangeView>
    );
  };

  const memoCryptoPrice = useMemo(
    () => Number(props.price.toFixed(2)),
    [props.price],
  );

  const memoPercentageChange = useMemo(
    () => percentageChange(props.change),
    [props.change],
  );
  return (
    <ContainerView onSelect={props.onSelect} key={props.id}>
      <ColView>
        <CryptImage source={{uri: props.image}}></CryptImage>
        <LeftColTextView>
          <ThemedText>{props.name}</ThemedText>
          <ThemedText>{props.symbol}</ThemedText>
        </LeftColTextView>
      </ColView>
      <ColView>
        <RightColTextView>
          <ThemedText>${memoCryptoPrice}</ThemedText>
          {memoPercentageChange}
        </RightColTextView>
      </ColView>
    </ContainerView>
  );
};

export default CryptCard;
