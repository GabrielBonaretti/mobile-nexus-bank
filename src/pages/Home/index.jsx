// styled components
import { Background } from "./style";

// layout
import Header from "../../Layout/Header";
import Balance from "../../Layout/Balance";
import Functions from "../../Layout/Functions";
import Transactions from "../../Layout/Transactions";
import MyModal from "../../Layout/Modal";

// react
import { useState } from "react";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Background>
      <Header openModal={(e) => setModalVisible(true)} />

      <Balance />

      <Functions 
        navigation={navigation}
      />

      <Transactions />

      <MyModal
        modalVisible={modalVisible}
        onPress={() => navigation.navigate("Profile")}
        closeModal={(e) => setModalVisible(false)}
      />
    </Background>
  );
};

export default Home;
