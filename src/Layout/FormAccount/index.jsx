import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { Subtitle, Background, Input, ViewInputs } from "./style";

const FormAccount = () => {
  // State variables for storing account data
  const [agency, setAgency] = useState("");
  const [balance, setBalance] = useState("");
  const [numberAccount, setNumberAccount] = useState("");

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);

  // Fetching account data from the API on component mount
  useEffect(() => {
    if (auth) {
      const header = {
        Authorization: "Bearer " + auth,
      };

      api
        .get("/api/account/me/", { headers: header })
        .then((response) => {
          setAgency(response.data.agency);
          setBalance("R$ " + response.data.balance);
          setNumberAccount(response.data.number_account);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Background>
      <Subtitle>Profile account:</Subtitle>

      <ViewInputs>
        <Input value={agency} editable={false} $editable={false} />

        <Input value={balance} editable={false} $editable={false} />

        <Input value={numberAccount} editable={false} $editable={false} />
      </ViewInputs>
    </Background>
  );
};

export default FormAccount;
