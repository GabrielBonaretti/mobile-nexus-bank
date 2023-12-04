// components
import ParcelsComponent from "../NumberParcelsComponent";

// styled
import {
  Background,
  Container,
  Subtitle,
  TextStyled,
} from "./style";

const Credit = ({ creditItem, onPress }) => {
  return (
    <Background onPress={onPress}>
      <Container>
        <Subtitle>Received User:</Subtitle>
        <TextStyled>{creditItem.account_received.user.name}</TextStyled>
      </Container>

      <Container>
        <Subtitle>Value:</Subtitle>
        <TextStyled>
          R$ {parseFloat(creditItem.valueTotal).toFixed(2)}
        </TextStyled>
      </Container>

      <Container>
        <Subtitle>N° Parcels:</Subtitle>
        <ParcelsComponent content={creditItem} />
      </Container>
    </Background>
  );
};

export default Credit;
