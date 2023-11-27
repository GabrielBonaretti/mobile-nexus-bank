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
  height: 50px;
  color: #fff;
`;
