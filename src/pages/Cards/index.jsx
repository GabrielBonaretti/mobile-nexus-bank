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

  const handleBlockDebitCard = async () => {
    await api
      .get(`/api/card/${debitCard.id}/block/`, { headers: header })
      .then((response) => setDebitCard())
      .catch((error) => console.log(error));
  };

  const handleCreateDebitCard = async () => {
    await api
      .post(`/api/card/new/`, {
        type_card: "Debit"
      }, { headers: header })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

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
        handleBlockCard={handleBlockDebitCard}
        handleCreateCard={handleCreateDebitCard}
        onPress={() =>
          navigation.navigate("CardTransaction", { card: debitCard })
        }
      />
      <CardSpace typeCard="Credit card" card={creditCard} />
    </Background>
  );
};

export default Cards;
