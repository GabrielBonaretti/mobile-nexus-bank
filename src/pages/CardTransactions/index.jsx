// styled components
import {
  Background,
  CardView,
  ContentViews,
  Scroll,
  TransactionsViews,
} from "./style";
import { Subtitle } from "../FinishPay/style";

// components
import { ScrollView, View } from "react-native";
import Card from "../../Components/Card";
import Transaction from "../../Components/Transaction";

// react
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";
import Credit from "../../Components/Credit";

const CardTransactions = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const [dataTransactions, setDataTransactions] = useState([]);
  const [dataCredit, setDataCredit] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const [userName, setUserName] = useState("");
  const [loadingName, setLoadingName] = useState(false);

  const route = useRoute();
  const card = route.params?.card;

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const fetchDataTransactions = async () => {
    setLoadingData(true);

    await api
      .get(`/api/card/${card.id}/transactions/?limit=2&offset=${offset}`, {
        headers: header,
      })
      .then((response) => {
        if (!response.data.next) {
          setHasNext(false);
        }

        setDataTransactions((prevData) => [
          ...prevData,
          ...response.data.results,
        ]);
      })
      .finally(() => setLoadingData(false));
  };

  const fetchDataCredits = async () => {
    setLoadingData(true);

    await api
      .get("/api/credit/", {
        headers: header,
      })
      .then((response) => {
        setDataCredit(response.data);
      })
      .finally(() => setLoadingData(false));
  };

  const getUser = async () => {
    setLoadingName(true);
    await api
      .get("/api/user/", { headers: header })
      .then((response) => setUserName(response.data.name))
      .catch((error) => console.log("Error fetching data:", error))
      .finally(() => setLoadingName(false));
  };

  useEffect(() => {
    getUser();
    fetchDataCredits();
  }, []);

  useEffect(() => {
    fetchDataTransactions();
  }, [offset]);

  return (
    <Background>
      <Scroll>
        <CardView>
          <Card card={card} />
        </CardView>

        <ContentViews>
          {card.type_card == "Credit" ? (
            <>
              <Subtitle>All credits:</Subtitle>
              <TransactionsViews>
                {!loadingData && !loadingName && (
                  <>
                    {dataCredit.map((creditItem) => (
                      <Credit
                        creditItem={creditItem}
                        onPress={() =>
                          navigation.navigate("Parcels", { content: creditItem, type: "Credit" })
                        }
                      />
                    ))}
                  </>
                )}
              </TransactionsViews>
            </>
          ) : (
            <>
              <Subtitle>Transactions:</Subtitle>

              <TransactionsViews>
                {!loadingData && !loadingName && (
                  <>
                    {dataTransactions.map((transactionItem) => (
                      <Transaction item={transactionItem} userName={userName} />
                    ))}
                  </>
                )}
              </TransactionsViews>

              {hasNext && (
                <View style={{ width: "100%", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={45}
                    color={"#DBB22F"}
                    onPress={() => setOffset(offset + 2)}
                  />
                </View>
              )}
            </>
          )}
        </ContentViews>
      </Scroll>
    </Background>
  );
};

export default CardTransactions;
