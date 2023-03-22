import {StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import React from 'react';


type Props = {};

const Main = (props: Props) => {

  const onPress = () => console.log('Click');

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
      <ScrollView style={styles.scrollView}>

        <TouchableHighlight onPress={onPress} underlayColor='grey'>
          <View style={styles.button}>
            <Text> + Add a Cryptocurrency </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
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
  scrollView: {
    width: '90%',
    display: 'flex',
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
  button: {
    alignItems: 'center',
    padding: 10,
  },
});
