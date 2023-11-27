import styled from "styled-components/native";
import { Animated } from 'react-native'

export const PlaceHolder = styled(Animated.Text)`
  color: #FFF;
  transform: translate(10px, 28px);
  font-size: 18px;
`;

export const InputStyled = styled.TextInput`
  color: #FFF;
  background-color: transparent;
  width: 300px;
  height: 40px;
  border: 1px solid #dbb22f;
  border-width: 0px 0px 1px 0px;
  justify-content: flex-start;
  font-size: 16px;
`;

