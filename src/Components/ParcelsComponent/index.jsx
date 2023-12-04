// styled components
import { Background, Button, ContentView, LineContent, SubContentView, Subtitle, TextButton, TextStyled } from "./style";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const ParcelsComponent = ({ item, onPress }) => {
  return (
    <Background>
      <ContentView>
        <SubContentView>
          <LineContent>
            <Subtitle>Nº Parcel: </Subtitle>
            <TextStyled>{item.number_parcel}</TextStyled>
          </LineContent>
          <LineContent>
            <Subtitle>Value Parcel: </Subtitle>
            <TextStyled>R$ {parseFloat(item.value_parcel).toFixed(2)}</TextStyled>
          </LineContent>
        </SubContentView>

        <SubContentView>
          <LineContent>
            <Subtitle>Due date: </Subtitle>
            <TextStyled>{item.due_date}</TextStyled>
          </LineContent>
          <LineContent>
            <Subtitle>Payed date: </Subtitle>
            {item.paid_date ? (
              <TextStyled>{item.paid_date}</TextStyled>
            ) : (
              <TextStyled>----------</TextStyled>
            )}
          </LineContent>
        </SubContentView>
      </ContentView>

      <Button $payed={item.paid} onPress={onPress}>
        {!item.paid ? (
          <TextButton>Pay</TextButton>
        ) : (
          <MaterialCommunityIcons
            name="check"
            size={30}
            color={"#2ACB37"}
          />
        )}
      </Button>
    </Background >
  );
};

export default ParcelsComponent;
