// styled components
import {
  Background,
  Content,
  DescriptionView,
  Input,
  InputDescription,
  LineContent,
  Subtitle,
  TextStyled,
  Title,
  ViewInput,
  ViewUser,
  Button,
  TextButton,
} from "./style";

// react
import { useEffect, useState } from "react";

// services
import { api } from "../../service/api";
import { formatValue } from "../../service/formatValue";

// zustand
import { useAuthStore } from "../../store/authStore";

// react navigation
import { useRoute } from "@react-navigation/native";

// layout
import BalanceInPay from "../../Layout/BalanceInPay";
import MyPicker from "../../Layout/MyPicker";

// notify
import Toast from "react-native-toast-message";

const FinishPay = ({ navigation }) => {
  const [value, setValue] = useState(formatValue(0));
  const [typeTransaction, setTypeTransaction] = useState("Transfer");
  const [description, setDescription] = useState("");

  const route = useRoute();
  const user = route.params?.user || "Default value if not provided";

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleSubmit = async () => {
    await api
      .post(
        "/api/transaction/",
        {
          account_received: user.id,
          value: parseFloat(value),
          description: description,
          type_transaction: typeTransaction,
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
        console.log(error.response);
        Toast.show({
          type: "error",
          text1: "Something error happened!",
        });
      });
  };

  return (
    <Background>
      <BalanceInPay />

      <ViewInput>
        <TextStyled>R$</TextStyled>
        <Input onChangeText={(e) => setValue(formatValue(e))} value={value} />
      </ViewInput>

      <MyPicker
        selectedValue={typeTransaction}
        onValueChange={(itemValue) => setTypeTransaction(itemValue)}
      />

      <DescriptionView>
        <Subtitle>Description:</Subtitle>
        <InputDescription
          placeholderTextColor="#FFF"
          style={{ textAlignVertical: "top" }}
          placeholder="Add mensage"
          multiline={true}
          onChangeText={(e) => setDescription(e)}
          value={description}
        />
      </DescriptionView>

      <ViewUser>
        <Subtitle>Who will rieceve:</Subtitle>
        <LineContent>
          <Title>Name:</Title>
          <Content>{user.user.name}</Content>
        </LineContent>
        <LineContent>
          <Title>CPF:</Title>
          <Content>{user.user.cpf}</Content>
        </LineContent>
        <LineContent>
          <Title>Account Number:</Title>
          <Content>{user.number_account}</Content>
        </LineContent>
      </ViewUser>

      <Button onPress={(e) => handleSubmit()}>
        <TextButton>Continuar</TextButton>
      </Button>
    </Background>
  );
};

export default FinishPay;
