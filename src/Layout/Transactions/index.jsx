// styled componets
import { Background, Subtitle, ViewsTransactions } from "./style";

// react
import { FlatList } from "react-native";

// components
import Transaction from "../../Components/Transaction";

const Transactions = () => {
  return (
    <Background>
      <Subtitle>Transactions:</Subtitle>
      <ViewsTransactions>
        <Transaction/>
      </ViewsTransactions>
    </Background>
  );
};

export default Transactions;
