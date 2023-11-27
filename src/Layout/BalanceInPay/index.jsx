// styled components
import axios from "axios";
import { Background, BalanceText, BalanceView, TextStyled } from "./style";

// React
import { useState } from "react";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";
import { Text, View } from "react-native";

const BalanceInPay = () => {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(0);

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const getBalance = async () => {
    await api
      .get("/api/account/me/", { headers: header })
      .then((response) => setBalance(response.data.balance))
      .catch((error) => console.log(error));
  };

  getBalance();

  return (
    <Background>
      <TextStyled>Account balance</TextStyled>

      <BalanceView>
        {visible ? (
          <>
            <BalanceText $visible>
              R$ {parseFloat(balance).toFixed(2)}
            </BalanceText>
            <MaterialCommunityIcons
              name="eye-outline"
              size={25}
              color={"#DBB22F"}
              onPress={(e) => setVisible(!visible)}
            />
          </>
        ) : (
          <>
            <BalanceText>R$ {parseFloat(balance).toFixed(2)}</BalanceText>
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={25}
              color={"#DBB22F"}
              onPress={(e) => setVisible(!visible)}
            />
          </>
        )}
      </BalanceView>
    </Background>
  );
};

export default BalanceInPay;
