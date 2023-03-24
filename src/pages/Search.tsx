import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../redux';

type Props = {};

const Search = (props: Props) => {
  const dispatch = useDispatch();
  const {getAllCryptos} = bindActionCreators(actionCreators, dispatch);
  const globalState = useSelector((state: State) => state.cryptos);

  useEffect(() => {
    getAllCryptos();
  }, []);

  return (
    <View>
      <View>
        {globalState &&
          globalState.allCryptos.map((crypto) => {
            return (<Text style={styles.text} key={crypto.id}>{crypto.name}</Text>);
          })}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});
