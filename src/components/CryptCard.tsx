import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import crypto from '../../metrics.json';

type Props = {};

const CryptCard = (Props: Props) => {
  return (
    <View>
      <View key={crypto.data.id} style={styles.container}>
        <View style={styles.leftCol}>
          <Image
            style={styles.image}
            source={require('../../assets/image.png')}></Image>
          <View style={styles.leftColText}>
            <Text style={styles.text}>{crypto.data.name}</Text>
            <Text style={styles.text}>{crypto.data.symbol}</Text>
          </View>
        </View>
        <View style={styles.rightCol}>
        <View style={styles.rightColText}>
            <Text style={styles.text}>${Math.round(((crypto.data.market_data.price_usd) + Number.EPSILON) * 100) / 100}</Text>
            <Text style={styles.text}>{Math.round(((crypto.data.market_data.percent_change_usd_last_24_hours) + Number.EPSILON) * 100) / 100}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CryptCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    color: 'white',
    fontSize: 16,

  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    width: '50%',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  leftColText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    // borderColor: 'yellow',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    width: '50%',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  rightColText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '100%',
    // borderColor: 'yellow',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
});
