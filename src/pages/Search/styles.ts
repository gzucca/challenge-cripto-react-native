import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 50px 20px 20px;
  color: ${({theme}) => theme.text};
  align-self: flex-start;
`;

export const ContainerView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  background-color: ${({theme}) => theme.primary};
`;

export const ListScrollView = styled.ScrollView`
  background-color: ${({theme}) => theme.primary};
  width: 100%;
`;

export const TouchableText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  padding: 6px 8px;
`;

export const AddView = styled.View`
  padding: 0px 24px;
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
