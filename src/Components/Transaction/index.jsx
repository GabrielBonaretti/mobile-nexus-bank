// styled components
import {
  Background,
  DashedLine,
  IconTransaction,
  LeftContent,
  TextStyled,
  TextValue,
  ViewRight,
} from "./style";

// react
import { useEffect, useState } from "react";

import { View } from "react-native";

const Transaction = ({ item, userName }) => {
  const [urlImage, setUrlImage] = useState(require("../../images/sent.png"));
  const [nameOtherUser, setNameOtherUser] = useState("");
  const [sent, setSent] = useState(false);

  const apiDatetime = new Date(item.create); // Replace this with your actual Date object
  const day = apiDatetime.getDate();
  const month = apiDatetime.getMonth() + 1; // Months are zero-based, so add 1
  const year = apiDatetime.getFullYear();
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  useEffect(() => {
    verifySent();
  }, []);

  const verifySent = () => {
      if (item.account_received.user.name == userName) {
      console.log("recebeu")
      setUrlImage(require("../../images/receive.png"));
      setNameOtherUser(item.account_sent.user.name);
      setSent(false);
    } else if (item.account_sent.user.name == userName) {
      console.log("enviou")
      setUrlImage(require("../../images/sent.png"));
      setNameOtherUser(item.account_received.user.name);
      setSent(true);
    }
  };

  return (
    <Background>
      <LeftContent>
        <IconTransaction source={urlImage} style={{ tintColor: "#dbb22f" }} />

        <DashedLine />

        <View>
          <TextValue $sent={sent}>
            R$ {parseFloat(item.value).toFixed(2)}
          </TextValue>
          <TextStyled>{nameOtherUser}</TextStyled>
        </View>
      </LeftContent>
      <ViewRight>
        <TextStyled>{formattedDate}</TextStyled>
        <TextStyled>{item.type_transaction}</TextStyled>
      </ViewRight>
    </Background>
  );
};

export default Transaction;
