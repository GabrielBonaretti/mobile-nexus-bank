// styled components
import { Background, ContentView, ExplainView, TextExplain } from "./style";
import { Input, Subtitle, TextStyled, ViewInput } from "../FinishPay/style";

// react
import { useState } from "react";

// services
import { formatValue } from "../../service/formatValue";

// components
import Button from "../../Components/Button";

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

// notify
import Toast from "react-native-toast-message";

const Loan = ({ navigation }) => {
  const [value, setValue] = useState(formatValue(0));
  const [numberInput, setNumberInput] = useState("1");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleSubmit = async () => {
    await api
      .post(
        "/api/loan/",
        {
          valueLoan: value,
          numberTotalParcels: numberInput,
          observation: "string",
        },
        { headers: header }
      )
      .then((response) => {
        Toast.show({
          type: "success",
          text1: Object.values(response.data),
        });

        navigation.navigate("Home");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: Object.values(error.response.data)[0],
        });
      });
  };

  return (
    <Background>
      <ExplainView>
        <Subtitle>Simplifying Loans: Quick, Easy, and Informed</Subtitle>

        <TextExplain>
          Simplify loan requests by providing the desired amount and installment
          preference. Financial institutions carefully assess this information,
          determining approval based on factors like credit history.
          Understanding the financial implications is crucial before finalizing
          any agreement.
        </TextExplain>
      </ExplainView>

      <ContentView>
        <ViewInput>
          <TextStyled>R$</TextStyled>
          <Input onChangeText={(e) => setValue(formatValue(e))} value={value} />
        </ViewInput>
        <ViewInput>
          <TextStyled>Number Parcels:</TextStyled>
          <Input
            onChangeText={(text) => setNumberInput(text)}
            value={numberInput}
            keyboardType="numeric"
            returnKeyType="done"
          />
        </ViewInput>
      </ContentView>
      <Button
        primary={false}
        content="Ask for a loan"
        onClick={() => handleSubmit()}
      />
    </Background>
  );
};

export default Loan;
