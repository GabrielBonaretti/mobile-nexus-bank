// styled components
import { Background, BackgroundIcon, TextFunction } from "./style";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Function = ({ icon, text, onPress  }) => {
  return (
    <Background>
      <BackgroundIcon onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={35} color={"#DBB22F"} />
      </BackgroundIcon>
      <TextFunction>{text}</TextFunction>
    </Background>
  );
};

export default Function;
