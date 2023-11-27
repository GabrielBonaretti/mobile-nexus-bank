// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// styled components
import { Background, Content, Icon, TextStyled } from "./style";

const ModalOption = ({ imageUrl, text, logOut = false, onPress }) => {
  return (
    <>
      {logOut ? (
        <Background $logout onPress={onPress}>
          <Content>
            <Icon source={imageUrl} style={{ tintColor: "#E3022C" }} />
            <TextStyled $logout>{text}</TextStyled>
          </Content>
        </Background>
      ) : (
        <Background onPress={onPress}>
          <Content>
            <Icon source={imageUrl} style={{ tintColor: "#FFF" }} />
            <TextStyled>{text}</TextStyled>
          </Content>

          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={"#DBB22F"}
          />
        </Background>
      )}
    </>
  );
};

export default ModalOption;
