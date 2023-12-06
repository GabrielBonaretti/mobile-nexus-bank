import { View } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

import { useAuthStore } from "../../store/authStore";

import { api } from "../../service/api";
import * as ImagePicker from "expo-image-picker";

// react
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Background, ImageStyled } from "./style";

const ImageProfile = () => {
  // State for storing the user's profile image URL
  const [urlImage, setUrlImage] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    setSelectedImage(result.assets[0].uri);
  };

  const getPic = async (event) => {
    if (auth) {
      await api
        .get("/api/user/", { headers: header })
        .then((response) => {
          setUrlImage(response.data.url_image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const uploadImage = async () => {
    console.log("testeasr")
    const formData = new FormData();
    formData.append("url_image", {
      uri: selectedImage,
      name: "photo.jpg",
      type: "image/jpg",
    });

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
    await api
      .patch("/api/user/", formData, {
        headers: {
          Authorization: "Bearer " + auth,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        getPic();
      })
      .catch((error) => {
        console.error("Error uploading image:", error.toJSON());
      });
  };

  useFocusEffect(
    useCallback(() => {
      getPic();
    }, [])
  );

  useEffect(() => {
    console.log(selectedImage)
    if (selectedImage) {
      uploadImage();
    }
  }, [selectedImage])

  return (
    <Background onPress={() => pickImage()}>
      {urlImage ? (
        <ImageStyled source={{ uri: urlImage }} />
      ) : (
        <ImageStyled source={require("../../images/user.png")} />
      )}
    </Background>
  );
};

export default ImageProfile;
