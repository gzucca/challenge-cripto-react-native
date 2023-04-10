import React, { useMemo} from 'react';

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
import { useTheme  } from 'styled-components'

type Props = {
  image: string;
  name: string;
  price: number;
  change: number;
  id: string;
  symbol: string;
};

const CryptCard = (props: Props) => {
  const theme = useTheme()
  const percentageChange = (percentNumber: number) => {
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
    () => Number(props.price.toFixed(2)),
    [props.price],
  );

  const memoPercentageChange = useMemo(
    () => percentageChange(props.change),
    [props.change],
  );
  return (
    <ContainerView  key={props.id}>
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
