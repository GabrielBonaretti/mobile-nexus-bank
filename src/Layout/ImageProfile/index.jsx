import { View } from "react-native"
import { Pressable } from "react-native"
import { Text } from "react-native"
import { Image } from "react-native"

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import { useEffect, useState } from "react";


const ImageProfile = () => {
  // State for storing the user's profile image URL
  const [urlImage, setUrlImage] = useState();

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const getPic = async (event) => {
    console.log("a")

    if (auth) {
      await api
        .get("/api/user/", { headers: header })
        .then((response) => {
          console.log(response.data.url_image)
          setUrlImage(response.data.url_image);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.statusText === "Unauthorized") {
            notify({ content: "Login time expired, log in again to see your data", type: 1 });
            clearTokens();
          }
        });
    }
  };


  // useEffect(() => {
  //   getPic()
  // }, [auth]);

  return (
    <View>
      {urlImage ? (
        <ImageProfile source={{ uri: urlImage }} />
      ) : (
        <ImageProfile source={require("../../images/user.png")} />
      )}

      <Pressable>
        <Text>Change photo</Text>
      </Pressable>
    </View>
  )
}

export default ImageProfile