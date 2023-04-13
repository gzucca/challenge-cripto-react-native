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
import {useTheme} from 'styled-components';

const CryptCard = ({image, name, priceUsd, percentChange24hs, id, symbol}: CryptCardProps) => {
  const theme = useTheme();
  const percentageChange = (percentNumber: number) => {
    if (percentNumber === null) {
      return <View/>;
    }
    const roundNumber = Number(percentNumber.toFixed(2));
    const negative = roundNumber < 0;

    return (
      <PercentChangeView>
        <PercentChangeArrow
          width={16}
          height={16}
          rotation={negative ? 180 : 0}
          fill={negative ? theme.red : theme.green}
        />
        <PercentChangeNumber negative={negative}>
          {(negative ? -roundNumber : roundNumber) + '%'}
        </PercentChangeNumber>
      </PercentChangeView>
    );
  };

  const memoCryptoPrice = useMemo(
    () => Number(priceUsd.toFixed(2)),
    [priceUsd],
  );

  const memoPercentageChange = useMemo(
    () => percentageChange(percentChange24hs),
    [percentChange24hs],
  );
  return (
    <BackgroundView>
      <ContainerCol key={id}>
        <ContainerRow>
          <ColView>
            <CryptImage source={{uri: image}}></CryptImage>
            <LeftColTextView>
              <ThemedText>{name}</ThemedText>
              <ThemedText>{symbol}</ThemedText>
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
