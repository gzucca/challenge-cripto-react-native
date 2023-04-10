import styled from 'styled-components/native';

export const ComponentView = styled.View`
  background-color: ${props => props.theme.primary};
  min-height: 100%;
`;

export const HeaderView = styled.View`
  padding: 50px 0px 40px;
  background-color: ${({theme}) => theme.blue};
`;

export const ContainerView = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const ListScrollView = styled.ScrollView`
  width: 100%;
  padding: 0px 10px;
  display: flex;
  align-self: center;
`;

export const HeaderImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 99px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Inter-Medium';
  color: ${({theme}) => theme.white};
`;

export const TouchableText = styled.Text`
  align-self: center;
  padding: 6px 8px;
  color: ${({theme}) => theme.text};
`;

export const WarnText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ff6666;
  font-style: italic;
  text-align: center;
  padding: 30px 0px;
`;
