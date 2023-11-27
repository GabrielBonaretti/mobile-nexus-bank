// styled components
import { Background, ListFunctions, Subtitle } from "./style";

// components
import Function from "../../Components/Function";

const Functions = ({ navigation }) => {
  return (
    <Background>
      <Subtitle>Functions:</Subtitle>
      <ListFunctions>
        <Function icon="arrow-up" text="Pay" onPress={() => navigation.navigate("SearchPay")} />
        <Function icon="arrow-down" text="Receive" onPress={() => navigation.navigate("Receive")}/>
        <Function icon="credit-card-outline" text="Cards" />
        <Function icon="bank-outline" text="Loan" />
      </ListFunctions>
    </Background>
  );
};

export default Functions;
