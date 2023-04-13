import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Animated} from 'react-native';

export const DeleteButton = styled(RectButton)`
  flex: 1;
  background-color: ${({theme}) => theme.red};
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
`;

export const AnimatedIcon = styled(Animated.Image)`
  width: 30px;
  margin: 0px 10px;
  height: 30px;
`;
