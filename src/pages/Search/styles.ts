import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 20px 20px 10px;
  width: 100%;
  color: ${(props) => props.theme.text};
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
`

export const TouchableText = styled.Text`
  color: ${(props) => props.theme.text};
`;