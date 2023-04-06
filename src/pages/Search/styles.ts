import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 50px 20px 20px;
  width: 100%;
  color: ${props => props.theme.text};
`;

export const ContainerView = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  background-color: ${props => props.theme.primary};
`;

export const ListScrollView = styled.ScrollView`
  padding: 0px 20px;
`;

export const TouchableText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  padding: 6px 8px;
`;

export const AddView = styled.View`
  padding: 20% 24px;
  height: 100%;
`;

export const AddText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${props => props.theme.text}
`

export const AddTextInput = styled.TextInput`
  border: 2px solid #fbd24d;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 16px;
  color: black;
  padding: 8px 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #fbd24d;
  margin-top: 16px;
  padding: 10px;
  width: 100px;
  align-items: center;
  border-radius: 4px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  color: #385775;
  font-size: 16px;
`;
