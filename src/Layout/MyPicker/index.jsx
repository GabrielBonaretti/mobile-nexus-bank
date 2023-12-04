// conmponents
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

import { Background, BackgroundPicker, Input, PickerStyled, Subtitle } from "./style";
import { Text } from "react-native";

const MyPicker = ({
  selectedValue,
  onValueChange,
  numberParcels,
  setNumberParcels,
}) => {
  return (
    <Background>
      <Subtitle>Type transaction:</Subtitle>
      <BackgroundPicker>
        <PickerStyled
          $credit={selectedValue != "Credit card"}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          <Picker.Item label="Transfer" value="Transfer" />
          <Picker.Item label="Debit card" value="Debit card" />
          <Picker.Item label="Credit card" value="Credit card" />
        </PickerStyled>
        {selectedValue == "Credit card" && (
          <Input
            onChangeText={setNumberParcels}
            value={numberParcels}
            placeholder="Number Parcels"
            placeholderTextColor="#fff"
          />
        )}
      </BackgroundPicker>
    </Background>
  );
};

export default MyPicker;
