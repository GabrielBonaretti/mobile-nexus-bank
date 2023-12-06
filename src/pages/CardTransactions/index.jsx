// styled components
import {
  Background,
  CardView,
  ContentViews,
  Scroll,
  TransactionsViews,
  Subtitle,
  ViewSubtitle,
  ViewTeste,
  ButtonSection
} from "./style";

// components
import Credit from "../../Components/Credit";
import { View, FlatList } from "react-native";
import Card from "../../Components/Card";
import Transaction from "../../Components/Transaction";

// react
import { useRoute } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

const CardTransactions = ({ navigation }) => {
  const [offset, setOffset] = useState(0);

  const [dataTransactions, setDataTransactions] = useState([]);
  const [dataCredit, setDataCredit] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [loadingName, setLoadingName] = useState(false);

  const [seeCredits, setSeeCredits] = useState(true);

  const route = useRoute();
  const card = route.params?.card;

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const fetchDataTransactions = async () => {
    if (loading) return;

    setLoading(true);

    await api
      .get(`/api/card/${card.id}/transactions/?limit=2&offset=${offset}`, {
        headers: header,
      })
      .then((response) => {
        setDataTransactions((prevData) => [...prevData, ...response.data.results]);
        setOffset(offset + 2);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally((e) => setLoading(false));
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


  // O código dentro deste bloco será executado sempre que o componente for focado
  useFocusEffect(
    useCallback(() => {
      getUser();
      fetchDataCredits();
      fetchDataTransactions();
    }, [])
  );

  return (
    <Background>
      <CardView>
        <Card card={card} />
      </CardView>

      <ContentViews>
        {card.type_card == "Credit" ? (
          <>
            <ViewSubtitle>
              <ButtonSection $active={seeCredits} onPress={() => setSeeCredits(true)}>
                <Subtitle>All credits:</Subtitle>
              </ButtonSection>

              <ButtonSection $active={!seeCredits} onPress={() => setSeeCredits(false)}>
                <Subtitle>Transactions:</Subtitle>
              </ButtonSection>
            </ViewSubtitle>


            <ViewTeste>
              <TransactionsViews>
                {seeCredits ? (
                  <>
                    {!loadingData && !loadingName && (
                      <>
                        <FlatList
                          data={dataCredit}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item }) => (
                            <Credit
                              creditItem={item}
                              onPress={() =>
                                navigation.navigate("Parcels", { content: item, type: "Credit" })
                              }
                            />
                          )}
                          ItemSeparatorComponent={<View style={{ height: 35 }} />}
                          showsVerticalScrollIndicator={false}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {!loadingData && !loadingName && (
                      <>
                        <FlatList
                          data={dataTransactions}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item }) => (
                            <Transaction item={item} userName={userName} />
                          )}
                          onEndReached={fetchDataTransactions}
                          onEndReachedThreshold={0.1}
                          ItemSeparatorComponent={<View style={{ height: 35 }} />}
                          showsVerticalScrollIndicator={false}
                        />
                      </>
                    )}
                  </>
                )}
              </TransactionsViews>
            </ViewTeste>

          </>
        ) : (
          <>
            <Subtitle>Transactions:</Subtitle>

            <TransactionsViews>
              {!loadingData && !loadingName && (
                <>
                  <FlatList
                    data={dataTransactions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      <Transaction item={item} userName={userName} />
                    )}
                    onEndReached={fetchDataTransactions}
                    onEndReachedThreshold={0.1}
                    ItemSeparatorComponent={<View style={{ height: 35 }} />}
                    showsVerticalScrollIndicator={false}
                  />
                </>
              )}
            </TransactionsViews>
          </>
        )}
      </ContentViews>
    </Background>
  );
};

export default CardTransactions;
