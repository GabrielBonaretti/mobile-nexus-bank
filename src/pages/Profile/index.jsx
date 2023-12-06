import { View } from "react-native";
import { Background } from "./style";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import ImageProfile from "../../Layout/ImageProfile";
import FormAccount from "../../Layout/FormAccount";
import FormUser from "../../Layout/FormUser";
import FormAdress from "../../Layout/FormAdress";
import { ScrollView } from "react-native";

const Profile = () => {
  return (
    <ScrollView>
      <Background>
        <ImageProfile />

        <FormAccount />

        <FormAdress />

        <FormUser />
      </Background>
    </ScrollView>
  );
};

export default Profile;
