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

  const [userName, setUserName] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    fetchData();
  }, [offset]);

  const getUser = async () => {
    if (loadingName) return;

    setLoadingName(true);

    await api
      .get("/api/user", {
        headers: header,
      })
      .then((response) => setUserName(response.data.name))
      .catch((error) => console.log("Error fetching data:", error))
      .finally((e) => setLoadingName(false));
  };

  const fetchData = async () => {
    if (loading) return;
    console.log("teste")
    setLoading(true);

    await api
      .get(`/api/transaction/search/?limit=3&offset=${offset}`, {
        headers: header,
      })
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data.results]);
        setOffset(offset + 3);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally((e) => setLoading(false));
  };

  return (
    <Background>
      <Subtitle>Transactions:</Subtitle>
      <ViewsTransactions>
        {!loadingName ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Transaction item={item} userName={userName} />
            )}
            onEndReached={fetchData}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<ActivityIndicator animating size="large" />}
            ItemSeparatorComponent={<View style={{ height: 35 }} />}
          />
        ) : (
          <ActivityIndicator animating size="large" />
        )}
      </ViewsTransactions>
    </Background>
  );
};

export default Transactions;
