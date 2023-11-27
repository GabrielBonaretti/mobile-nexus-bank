// styled components
import {
  ViewStyled,
  Logo,
  ViewInputs,
  Line,
  ViewButtons,
  TextLine,
  ViewLine,
  TextCopy,
} from "./style";

// my components
import Input from "../../Components/Input";
import Button from "../../Components/Button";

// react
import { useState } from "react";

// api
import { api } from "../../service/api";

// format CPF
import { formatCPF } from "../../service/formatCPF";

// zustend
import { useAuthStore } from "../../store/authStore";

// notify
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const handleSubmit = async () => {
    await api
      .post("/api/login/", {
        cpf: cpf,
        password: password,
      })
      .then((response) => {
        setAccessToken(response.data.access);
        navigation.navigate("Home");

        setCpf("");
        setPassword("");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: Object.values(error.response.data)[0],
        });
      });
  };

  return (
    <ViewStyled>
      <Logo source={require("../../images/logo.png")} />

      <ViewInputs>
        <Input
          content="CPF"
          onChangeText={(e) => setCpf(formatCPF(e))}
          value={cpf}
        />
        <Input
          content="Password"
          typePassword={true}
          onChangeText={(e) => setPassword(e)}
          value={password}
        />
      </ViewInputs>

      <ViewButtons>
        <Button primary={true} content="Log in" onClick={handleSubmit} />
        <ViewLine>
          <Line />
          <TextLine>OR</TextLine>
          <Line />
        </ViewLine>
        <Button
          primary={false}
          content="Sign up"
          onClick={(e) => navigation.navigate("Signup")}
        />
      </ViewButtons>

      <TextCopy>© 2023 Nexus .inc</TextCopy>
    </ViewStyled>
  );
};

export default Login;
