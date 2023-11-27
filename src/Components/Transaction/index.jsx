// styled components
import {
  Background,
  DashedLine,
  IconTransaction,
  LeftContent,
  TextStyled,
  ViewRight,
} from "./style";

import { Image, View } from "react-native";

const Transaction = () => {
  return (
    <Background>
      <LeftContent>
        <IconTransaction
          source={require("../../images/sent.png")}
          style={{ tintColor: "#dbb22f" }}
        />

        <DashedLine />

        <View>
          <TextStyled>R$ 100,00</TextStyled>
          <TextStyled>Gabriel Bonaretti da Silva</TextStyled>
        </View>
      </LeftContent>
      <ViewRight>
        <TextStyled>25/10/2004</TextStyled>
        <TextStyled>Transfer</TextStyled>
      </ViewRight>
    </Background>
  );
};

export default Transaction;
