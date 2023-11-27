// styled components
import {
  Input,
  TextStyled,
  ViewInput,
  Button,
  TextButton,
} from "../FinishPay/style";

import { Background } from "./style";

// react
import { useEffect, useState } from "react";

// services
import { api } from "../../service/api";
import { formatValue } from "../../service/formatValue";

// zustand
import { useAuthStore } from "../../store/authStore";

// notify
import Toast from "react-native-toast-message";

const Receive = ({ navigation }) => {
  const [value, setValue] = useState(formatValue(0));

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleSubmit = async () => {
    await api
      .post(
        "/api/transaction/receive/",
        {
          value: parseFloat(value),
        },
        { headers: header }
      )
      .then((response) => {
        Toast.show({
          type: "success",
          text1: "Transaction made successfully!",
        });
        navigation.navigate("Home");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Something error happened!",
        });
      });
  };

  return (
    <Background>
      <ViewInput>
        <TextStyled>R$</TextStyled>
        <Input onChangeText={(e) => setValue(formatValue(e))} value={value} />
      </ViewInput>

      <Button onPress={(e) => handleSubmit()}>
        <TextButton>Continuar</TextButton>
      </Button>
    </Background>
  );
};

export default Receive;
