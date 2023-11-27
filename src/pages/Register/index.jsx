// my components
import Input from "../../Components/Input";
import Button from "../../Components/Button";

// react
import { useState } from "react";

// api
import { api } from "../../service/api";

// format CPF
import { formatCPF } from "../../service/formatCPF";

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
} from "../Login/style";

// notify
import Toast from "react-native-toast-message";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "warn",
        text1: "The passwords entered are different",
      });
    } else {
      await api
        .post("/api/create/", {
          name: name,
          email: email,
          cpf: cpf,
          password: password,
        })
        .then((response) => {
          Toast.show({
            type: "success",
            text1: "Your account was created",
          });
          navigation.navigate("Login");
        })
        .catch((error) => {
          const errors = Object.values(error.response.data);

          for (const errorString of errors) {
            Toast.show({
              type: "error",
              text1: errorString,
            });
          }
        });
    }
  };

  return (
    <ViewStyled>
      {/* <ToastManager style={{ backgroundColor: "#1A1E1C" }} height={90} /> */}

      <Logo source={require("../../images/logo.png")} />

      <ViewInputs>
        <Input content="Name" onChangeText={(e) => setName(e)} value={name} />
        <Input
          content="Email"
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
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
        <Input
          content="Confirm Password"
          typePassword={true}
          onChangeText={(e) => setConfirmPassword(e)}
          value={confirmPassword}
        />
      </ViewInputs>

      <ViewButtons>
        <Button primary={true} content="Sign up" onClick={handleSubmit} />
        <ViewLine>
          <Line />
          <TextLine>OR</TextLine>
          <Line />
        </ViewLine>
        <Button
          primary={false}
          content="Log in"
          onClick={(e) => navigation.navigate("Login")}
        />
      </ViewButtons>

      <TextCopy>© 2023 Nexus .inc</TextCopy>
    </ViewStyled>
  );
};

export default Register;
