import styled from 'styled-components/native';

export const BackgroundView = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.primary};
`;

export const ContainerCol = styled.View`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  padding: 20px 10px;
  width: 90%;
  border-color: ${({theme}) => theme.grey};
  border-bottom-width: 1px;
  border-style: solid;
  background-color: ${({theme}) => theme.primary};
`;

export const ContainerRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PercentChangeView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 2.5px;
  align-items: center;
`;

type PercentChangeNumberProps = {
  negative: boolean;
};

export const PercentChangeNumber = styled.Text<PercentChangeNumberProps>`
  color: ${props => (props.negative ? props.theme.red : props.theme.green)};
`;

export const ColView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: center;
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
`;
