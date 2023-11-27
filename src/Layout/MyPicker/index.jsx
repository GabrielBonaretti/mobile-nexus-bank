// conmponents
import { Picker } from "@react-native-picker/picker";

import { Background, PickerStyled, Subtitle } from "./style";

const MyPicker = ({ selectedValue, onValueChange }) => {
  return (
    <Background>
      <Subtitle>Type transaction:</Subtitle>
      <PickerStyled
        selectedValue={selectedValue}
        // style={{ height: 50, width: 200, color: "#fff" }}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Transfer" value="Transfer" />
        <Picker.Item label="Debit card" value="Debit card" />
        <Picker.Item label="Credit card" value="Credit card" />
      </PickerStyled>
    </Background>
  );
};

export default MyPicker;
