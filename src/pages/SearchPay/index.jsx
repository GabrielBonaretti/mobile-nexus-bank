// styled components
import {
  Background,
  Button,
  Input,
  Subtitle,
  TextButton,
  ViewContent,
} from "./style";

// react
import { useState } from "react";

// api
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

// notify
import Toast from "react-native-toast-message";

const SearchPay = ({ navigation }) => {
  const [valueInput, setValueInput] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleSubmit = async () => {
    await api
      .get(`/api/account/search/?search=${valueInput}`, {
        headers: header,
      })
      .then((response) => {
        if (response.data.id == undefined) {
          Toast.show({
            type: "error",
            text1: "No account found!",
          });
        } else {
          navigation.navigate("FinishPay", { user: response.data });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Background>
      <ViewContent>
        <Subtitle>Key:</Subtitle>
        <Input
          placeholderTextColor="#FFF"
          placeholder="Enter the CPF, Name, Account Number or E-mail."
          onChangeText={(e) => setValueInput(e)}
          value={valueInput}
        />
      </ViewContent>

      {valueInput.length <= 0 ? (
        <Button disabled $disabled>
          <TextButton $disabled>Continuar</TextButton>
        </Button>
      ) : (
        <Button onPress={(e) => handleSubmit()}>
          <TextButton>Continuar</TextButton>
        </Button>
      )}
    </Background>
  );
};

export default SearchPay;
