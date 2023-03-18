import {StyleSheet, Text, View, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import CryptCard from '../components/CryptCard';

type Props = {};

const Main = (props: Props) => {
  return (

    <View>
      <View style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.headerText}>CryptoTracker Pro</Text>
          <Image
            style={styles.headerProfile}
            source={require('../../assets/profilePhoto.jpeg')}></Image>
        </View>
      </View>
      <ScrollView>
        <CryptCard></CryptCard>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    paddingVertical: 40,
    backgroundColor: '#385775',
  },
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  headerProfile: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter-Medium',
  },
});
