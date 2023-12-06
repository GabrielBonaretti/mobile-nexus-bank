// styled components
import { Image, View } from "react-native";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

// styled components
import {
  Background,
  ImageLogo,
  ImageProfile,
  Left,
  Right,
  TextCpf,
  TextName,
  ViewTexts,
} from "./style";

// react
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

// zustend
import { useAuthStore } from "../../store/authStore";

// axios
import { api } from "../../service/api";

const Header = ({ openModal }) => {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [urlImage, setUrlImage] = useState();

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const handleGetContent = async () => {
    if (auth) {
      await api
        .get("/api/user/", { headers: header })
        .then((response) => {
          setName(response.data.name);
          setCpf(response.data.cpf);
          setUrlImage(response.data.url_image);
        })
        .catch((error) => console.log(error));
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleGetContent();
    }, [])
  );

  return (
    <Background>
      <Left>
        {urlImage ? (
          <ImageProfile source={{ uri: urlImage }} />
        ) : (
          <ImageProfile source={require("../../images/user.png")} />
        )}

        <ViewTexts>
          <TextCpf>{cpf}</TextCpf>
          <TextName>Hi, {name}!</TextName>
        </ViewTexts>
      </Left>
      <Right>
        <Entypo
          name="dots-three-vertical"
          size={25}
          color={"#DBB22F"}
          onPress={openModal}
        />
      </Right>
    </Background>
  );
};

export default Header;
