// styled componets
import { Background, Subtitle, ViewsTransactions } from "./style";

// components
import { FlatList, ActivityIndicator, View } from "react-native";
import Transaction from "../../Components/Transaction";

// react
import { useState, useEffect } from "react";

// api
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";

// react query
import { useQuery } from "react-query";

const Transactions = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingName, setLoadingName] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [userName, setUserName] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const getUser = async () => {
    if (loadingName) return;

    setLoadingName(true);

    await api
      .get("/api/user/", {
        headers: header,
      })
      .then((response) => setUserName(response.data.name))
      .catch((error) => console.log("Error fetching data:", error))
      .finally((e) => setLoadingName(false));
  };

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);

    await api
      .get(`/api/transaction/search/?limit=6&offset=${offset}`, {
        headers: header,
      })
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data.results]);
        setOffset(offset + 6);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally((e) => setLoading(false));
  };

  const { dataQuery, isLoading, error } = useQuery(
    "transactions",
    () => {
      return api
        .get("/api/transaction/search/?limit=6&offset=0", { headers: header })
        .then((response) => {
          if (data[0] !== undefined) {
            for (const transaction in response.data.results) {
              if (response.data.results[transaction].id > data[0].id) {
                setLoadingTransaction(true);
                setData((prevData) => [
                  response.data.results[transaction],
                  ...prevData,
                ]);
              }
            }
            setLoadingTransaction(false);
          }
        });
    },
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    fetchData();
  }, [offset]);

  return (
    <Background>
      <Subtitle>Transactions:</Subtitle>
      <ViewsTransactions>
        {!loadingName && !loadingTransaction ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Transaction item={item} userName={userName} />
            )}
            onEndReached={fetchData}
            onEndReachedThreshold={0.1}
            ItemSeparatorComponent={<View style={{ height: 35 }} />}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator animating size="large" />
        )}
      </ViewsTransactions>
    </Background>
  );
};

export default Transactions;
