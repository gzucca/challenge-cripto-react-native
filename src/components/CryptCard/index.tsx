import React, {useMemo} from 'react';
import PercentChangeArrow from '../../../assets/icons/north_east_black_24dp.svg';
import {
  ContainerRow,
  PercentChangeNumber,
  PercentChangeView,
  ColView,
  LeftColTextView,
  RightColTextView,
  CryptImage,
  ThemedText,
  ContainerCol,
  BackgroundView,
} from './styles';
import {CryptCardProps} from '../../../types';
import {View} from 'react-native';

const CryptCard = (props: CryptCardProps) => {
  const percentageChange = (percentNumber: number) => {
    if (percentNumber === null) {
      return <View></View>
    }
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
    () => Number(props.priceUsd.toFixed(2)),
    [props.priceUsd],
  );

  const memoPercentageChange = useMemo(
    () => percentageChange(props.percentChange24hs),
    [props.percentChange24hs],
  );
  return (
    <BackgroundView>
      <ContainerCol onSelect={props.onSelect} key={props.id}>
        <ContainerRow>
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
              <View>{memoPercentageChange}</View>
            </RightColTextView>
          </ColView>
        </ContainerRow>
      </ContainerCol>
    </BackgroundView>
  );
};

export default CryptCard;
