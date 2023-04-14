import {CryptoObject} from '../../../types';
import CryptCard from '../CryptCard';
import {Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {AnimatedIcon, DeleteButton} from './styles';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../redux';

const renderLeftActions = (
  _progress: Animated.AnimatedInterpolation<number>,
  dragX: Animated.AnimatedInterpolation<number>,
) => {
  const scale = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <DeleteButton>
      <AnimatedIcon
        source={require('../../../assets/icons/delete_black_24dp.png')}
        style={{transform: [{scale}]}}
      />
    </DeleteButton>
  );
};

const ListItem = ({data}: {data: CryptoObject}) => {
  const dispatch = useDispatch();
  const {deleteCrypto} = bindActionCreators(actionCreators, dispatch);

  return (
    <Swipeable
      renderRightActions={renderLeftActions}
      onSwipeableOpen={() => deleteCrypto(data.id)}>
      <CryptCard
        key={data.id}
        id={data.id}
        name={data.name}
        symbol={data.symbol}
        image={`https://asset-images.messari.io/images/${data.id}/64.png?v=2`}
        priceUsd={data.priceUsd}
        percentChange24hs={data.percentChange24hs}
      />
    </Swipeable>
  );
};

export default ListItem;
