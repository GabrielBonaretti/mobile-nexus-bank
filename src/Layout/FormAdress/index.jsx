import { Pressable } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { Background, Input, Subtitle, ViewInputs } from "../FormAccount/style";

import Buttom from "../../Components/Button";
import { ButtonStyled, TextStyled, ViewButtons } from "./style";

const FormAdress = () => {
  const [enableForm, setEnableForm] = useState(false);
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [uf, setUf] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleCancel = (e) => {
    handleGetContent(); // Restores original content from the server
    setEnableForm(false); // Disables the form
  };

  const handleSubmit = async (e) => {
    // Request data for updating user address
    const requestData = {
      cep: cep,
      city: city,
      neighborhood: neighborhood,
      number: number,
      street: street,
      uf: uf,
    };

    await api
      .put("/api/adress/1/search/", requestData, { headers: header })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        handleGetContent();
      });

    setEnableForm(false);
  };

  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/adress/search/", { headers: header })
        .then((response) => {
          setCep(`${response.data.cep}`);
          setCity(response.data.city);
          setNeighborhood(response.data.neighborhood);
          setNumber(`${response.data.number}`);
          setStreet(response.data.street);
          setUf(response.data.uf);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    handleGetContent();
  }, []);

  return (
    <Background>
      <Subtitle>Profile address: </Subtitle>

      <ViewInputs>
        <Input
          placeholder="Street"
          editable={enableForm}
          $editable={enableForm}
          value={street}
          onChangeText={(e) => setStreet(e)}
        />

        <Input
          placeholder="Number"
          editable={enableForm}
          $editable={enableForm}
          value={number}
          onChangeText={(e) => setNumber(e)}
        />

        <Input
          placeholder="Neighborhood"
          editable={enableForm}
          $editable={enableForm}
          value={neighborhood}
          onChangeText={(e) => setNeighborhood(e)}
        />

        <Input
          placeholder="City"
          editable={enableForm}
          $editable={enableForm}
          value={city}
          onChangeText={(e) => setCity(e)}
        />

        <Input
          placeholder="UF"
          editable={enableForm}
          $editable={enableForm}
          value={uf}
          onChangeText={(e) => setUf(e)}
        />

        <Input
          placeholder="CEP"
          editable={enableForm}
          $editable={enableForm}
          value={cep}
          onChangeText={(e) => setCep(e)}
        />
      </ViewInputs>

      <ViewButtons>
        {enableForm ? (
          <>
            <ButtonStyled onPress={() => handleCancel()}>
              <TextStyled>Cancel</TextStyled>
            </ButtonStyled>
            <ButtonStyled $primary={true} onPress={() => handleSubmit()}>
              <TextStyled $primary={true} >Submit</TextStyled>
            </ButtonStyled>
          </>
        ) : (
          <>
            <ButtonStyled onPress={() => setEnableForm(true)}>
              <TextStyled>Edit</TextStyled>
            </ButtonStyled>
          </>
        )}
      </ViewButtons>
    </Background>
  );
};

export default FormAdress;
