import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useMemo} from 'react';
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
} from './styles';

const CryptCard = () => {
  const percentageChange = (percentNumber: number) => {
    const roundNumber =
      Math.round((percentNumber + Number.EPSILON) * 100) / 100;
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

  return (
    <ContainerView key={crypto.data.id}>
      <ColView>
        <CryptImage source={require('../../../assets/image.png')}></CryptImage>
        <LeftColTextView>
          <Text>{crypto.data.name}</Text>
          <Text>{crypto.data.symbol}</Text>
        </LeftColTextView>
      </ColView>
      <ColView>
        <RightColTextView>
          <Text>
            $
            {Math.round(
              (crypto.data.market_data.price_usd + Number.EPSILON) * 100,
            ) / 100}
          </Text>
          {useMemo(() => {
          return percentageChange(crypto.data.market_data.percent_change_usd_last_24_hours)
          }, [crypto.data.market_data.percent_change_usd_last_24_hours])}
        </RightColTextView>
      </ColView>
    </ContainerView>
  );
};

export default CryptCard;
