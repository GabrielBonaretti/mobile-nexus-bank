// styled components
import axios from "axios";
import { BalanceText, BalanceView } from "./style";

// React
import { useState } from "react";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// react query
import { useQuery } from "react-query";

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

const Balance = () => {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(0)

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const { data, isLoading, error } = useQuery(
    "balance",
    () => {
      return api
        .get("/api/account/me/", { headers: header })
        .then((response) => setBalance(response.data.balance));
    },
    {
      refetchInterval: 5000,
    }
  );


  if (error) {
    console.log(error.response);
  }

  return (
    <BalanceView>
      {visible ? (
        <>
          <BalanceText $visible>
            R$ {parseFloat(balance).toFixed(2)}
          </BalanceText>
          <MaterialCommunityIcons
            name="eye-outline"
            size={28}
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
  );
};

export default Balance;
