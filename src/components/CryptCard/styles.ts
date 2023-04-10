import styled from 'styled-components/native';

export const PercentChangeView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

export const PercentChangeNumber = styled.Text<{
  negative: boolean;
}>`
  color: ${props => (props.negative ? props.theme.red : props.theme.green)};
`;

export const ContainerView = styled.View`
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  padding: 20px 0px;
  border-color: ${({theme}) => theme.grey};
  border-bottom-width: 1px;
  border-style: solid;
`;

export const ColView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LeftColTextView = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: center;
  align-items: flex-start;
`;

export const RightColTextView = styled(LeftColTextView)`
  align-items: flex-end;
`;

export const CryptImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 99px;
`;

export const ThemedText = styled.Text`
  color: ${({theme}) => theme.text};

`