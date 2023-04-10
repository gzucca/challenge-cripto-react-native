import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 40px 20px 0px;
  color: ${({theme}) => theme.text};
  align-self: flex-start;
`;

export const ContainerView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.primary};
`;

export const ListScrollView = styled.ScrollView`
  background-color: ${({theme}) => theme.primary};
  width: 100%;
`;

export const TouchableText = styled.Text`
  color: ${({theme}) => theme.lightGrey};
  font-size: 16px;
  padding: 6px 8px;
`;

export const AddView = styled.View`
  position: absolute;
  height: 100%;
  width: 90%;
  align-self: center;
  justify-content: center;
`;

export const AddText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({theme}) => theme.text};
`;

export const AddTextInput = styled.TextInput`
  border: 2px solid #fbd24d;
  border-radius: 4px;
  background-color: ${({theme}) => theme.primary};
  font-size: 16px;
  color: ${({theme}) => theme.text};
  padding: 8px 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.yellow};
  margin: 16px 0px;
  padding: 10px;
  width: 100px;
  align-items: center;
  border-radius: 4px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 16px;
`;
