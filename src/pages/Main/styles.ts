import styled from 'styled-components/native';

export const ComponentView = styled.View`
  background-color: ${props => props.theme.primary};
  min-height: 100%;
`;

export const HeaderView = styled.View`
  padding: 50px 0px 0px;
  background-color: ${({theme}) => theme.blue};
`;

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%
`;

export const ColumnView = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: center;
`;

export const TrashCanTouchable = styled.TouchableOpacity`
  position: relative;
  padding: 10px 0px 10px;
`

export const ListScrollView = styled.ScrollView`
  width: 100%;
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

export const TouchableView = styled.View`
  align-self: center;
`
