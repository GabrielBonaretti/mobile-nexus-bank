// styled components
import { Background } from "./style";
import { Subtitle } from "../FinishPay/style";

// layout
import CardSpace from "../../Layout/CardSpace";

// axios
import { api } from "../../service/api";
import { useEffect, useState } from "react";

// zustand
import { useAuthStore } from "../../store/authStore";

// notify
import Toast from "react-native-toast-message";

const Cards = ({ navigation }) => {
  const [debitCard, setDebitCard] = useState();
  const [creditCard, setCreditCard] = useState();

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const fetchAllCard = async () => {
    await api
      .get("/api/card/", { headers: header })
      .then((response) => {
        for (const card of response.data) {
          if (card.type_card == "Debit") {
            setDebitCard(card);
          } else {
            setCreditCard(card);
          }
        }
      })
      .catch((error) => console.log(error));
  };

  const handleBlockCard = async () => {
    await api
      .get(`/api/card/${debitCard.id}/block/`, { headers: header })
      .then((response) => setDebitCard())
      .catch((error) => console.log(error));
  };

  const handleCreateDebitCard = async (type_card_param) => {
    await api
      .post(
        `/api/card/new/`,
        {
          type_card: type_card_param,
        },
        { headers: header }
      )
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.response.data)
        Toast.show({
          type: "error",
          text1: Object.values(error.response.data),
        });
      });

    fetchAllCard();
  };

  useEffect(() => {
    fetchAllCard();
  }, []);

  return (
    <Background>
      <Subtitle>My Cards:</Subtitle>

      <CardSpace
        typeCard="Debit card"
        card={debitCard}
        handleBlockCard={handleBlockCard}
        handleCreateCard={() => handleCreateDebitCard("Debit")}
        onPress={() =>
          navigation.navigate("CardTransaction", { card: debitCard })
        }
      />
      <CardSpace
        typeCard="Credit card"
        card={creditCard}
        handleBlockCard={handleBlockCard}
        handleCreateCard={() => handleCreateDebitCard("Credit")}
        onPress={() =>
          navigation.navigate("CardTransaction", { card: creditCard })
        }
      />
    </Background>
  );
};

export default Cards;
