// react navigation
import { useRoute } from "@react-navigation/native";

// styled components
import { Background } from "../Cards/style";
import { Content, LineContent, Subtitle, Title } from "../FinishPay/style";
import { BottomContent, ColumnContent, ParcelsContent, ViewUser } from "./style";

// components
import NumberParcelsComponent from "../../Components/NumberParcelsComponent";
import { View } from "react-native";

// axios
import { api } from "../../service/api";

// zustand
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native";
import ParcelsComponent from "../../Components/ParcelsComponent";

const Parcels = () => {
  const [data, setData] = useState([]);

  const route = useRoute();
  const content = route.params?.content || "Default value if not provided";
  const type = route.params?.type || "Default value if not provided";

  const auth = useAuthStore((state) => state.accessToken);

  const header = {
    Authorization: "Bearer " + auth,
  };

  const fetchParcels = async () => {
    await api
      .get(`api/parcelsCredit/${content.id}/all/`, { headers: header })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  return (
    <Background>
      <ViewUser>
        <Subtitle>Details:</Subtitle>
        <ColumnContent>
          <Title>Description:</Title>
          <Content>{content.observation}</Content>
        </ColumnContent>
        <LineContent>
          <Title>Name Receiver:</Title>
          <Content>{content.account_received.user.name}</Content>
        </LineContent>
        <LineContent>
          <Title>Value Total:</Title>
          <Content>R$ {parseFloat(content.valueTotal).toFixed(2)}</Content>
        </LineContent>
        <LineContent>
          <Title>Number Parcels:</Title>
          <NumberParcelsComponent content={content} />
        </LineContent>
      </ViewUser>

      <BottomContent>
        <Subtitle>Parcels:</Subtitle>

        <ParcelsContent>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ParcelsComponent item={item}/>
            )}
            ItemSeparatorComponent={<View style={{ height: 35 }} />}
            showsVerticalScrollIndicator={false}
          />
        </ParcelsContent>
      </BottomContent>
    </Background>
  );
};

export default Parcels;
