import styled from "styled-components/native";

// conmponents
import { Picker } from "@react-native-picker/picker";

export const Background = styled.View`
  display: flex;
  width: 90%;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #dbb22f;
  font-weight: bold;
`;

export const PickerStyled = styled(Picker)`
  flex: 1;
  width: ${props => props.$credit ? "100%" : "50%"};
  height: 50px;
  color: #FFF ;
`;

export const BackgroundPicker = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Input = styled.TextInput`
  width: 37.51%;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background-color: #202020;
  border-radius: 10px;
`;