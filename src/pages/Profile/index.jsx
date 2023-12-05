import { View } from "react-native"
import { Background } from "./style"
import { Pressable } from "react-native"
import { Text } from "react-native"
import { TextInput } from "react-native"
import ImageProfile from "../../Layout/ImageProfile"
import FormAccount from "../../Layout/FormAccount"
import FormUser from "../../Layout/FormUser"
import FormAdress from "../../Layout/FormAdress"

const Profile = () => {
  return (
    <Background>
      <View>
        <Text>Hi, Gabriel Bonaretti da Silva. Verify your data and change it if you want!</Text>

        {/* <ImageProfile /> */}

        <FormAccount />

        <FormAdress />

        <FormUser />
      </View>
    </Background >
  )
}

export default Profile