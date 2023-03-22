import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import crypto from '../../metrics.json';
import GainArrow from '../../assets/icons/north_east_black_24dp.svg';
import LossArrow from '../../assets/icons/south_west_black_24dp.svg';

type Props = {};

const CryptCard = (Props: Props) => {
  let percentageChange = (percentNumber: number) => {
    let roundNumber = Math.round((percentNumber + Number.EPSILON) * 100) / 100;

    if (roundNumber > 0) {
      return (
        <View style={styles.percentChangeText}>
          <GainArrow width={16} height={16} fill="green" />
          <Text style={styles.textGain}>{roundNumber + '%'}</Text>
        </View>
      );
    }

    if (roundNumber < 0) {
      let roundNumberAbsolute = -roundNumber;
      return (
        <View style={styles.percentChangeText}>
          <LossArrow width={16} height={16} fill="red" />
          <Text style={styles.textLoss}>{roundNumberAbsolute + '%'}</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <View key={crypto.data.id} style={styles.container}>
        <View style={[styles.col, styles.leftCol]}>
          <Image
            style={styles.image}
            source={require('../../assets/image.png')}></Image>
          <View style={[styles.colsText, styles.leftColText]}>
            <Text style={styles.text}>{crypto.data.name}</Text>
            <Text style={styles.text}>{crypto.data.symbol}</Text>
          </View>
        </View>
        <View style={[styles.col, styles.rightCol]}>
          <View style={[styles.colsText, styles.rightColText]}>
            <Text style={styles.text}>
              $
              {Math.round(
                (crypto.data.market_data.price_usd + Number.EPSILON) * 100,
              ) / 100}
            </Text>
            {percentageChange(
              crypto.data.market_data.percent_change_usd_last_24_hours,
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CryptCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 30,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textGain: {
    color: 'green',
    fontSize: 16,
  },
  textLoss: {
    color: 'red',
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
  col: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  percentChangeText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  leftCol: {
    // justifyContent: 'flex-start',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  rightCol: {
    // justifyContent: 'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  colsText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    alignSelf: 'center',
  },
  leftColText: {
    alignItems: 'flex-start',
    // borderColor: 'yellow',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  rightColText: {
    alignItems: 'flex-end',
    // borderColor: 'yellow',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  img: {
    width: 50,
    height: 50,
  },
});
