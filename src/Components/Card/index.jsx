// styled components
import { Background, TextNumber, TextStyled, ViewInfo } from "./style";

// components
import { ImageBackground } from "react-native";

const Card = ({ card, onPress }) => {
  // Parse the string into a Date object
  const dateObject = new Date(card.due_data);

  // Extract the month and year from the Date object
  const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  const year = String(dateObject.getFullYear()).slice(-2); // Get the last two digits of the year

  // Combine the month and year in the "MM/YY" format
  const formattedDate = `${month}/${year}`;

  return (
    <Background onPress={onPress}>
      <ImageBackground
        source={require("../../images/a.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 200,
        }}
      >
        <TextNumber style={{ fontWeight: 600 }}>{card.number}</TextNumber>
        <ViewInfo>
          <TextStyled style={{ fontWeight: 600 }}>{card.cvv}</TextStyled>
          <TextStyled style={{ fontWeight: 600 }}>{formattedDate}</TextStyled>
        </ViewInfo>
      </ImageBackground>
    </Background>
  );
};

export default Card;
