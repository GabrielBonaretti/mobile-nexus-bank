// styled components
import {
  SubsubTitle,
  ViewTypeCard,
  TopView,
  MenssageView,
  TextNewCredit,
} from "./style";

// components
import Card from "../../Components/Card";
import Button from "../../Components/Button";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardSpace = ({
  typeCard,
  card,
  handleBlockCard,
  handleCreateCard,
  onPress,
}) => {
  return (
    <ViewTypeCard>
      <SubsubTitle>{typeCard}</SubsubTitle>

      {card ? (
        <TopView>
          <Card card={card} onPress={onPress} />
          <Button primary={false} content="block" onClick={handleBlockCard} />
        </TopView>
      ) : (
        <TopView>
          <MenssageView>
            <MaterialCommunityIcons
              name="credit-card-plus-outline"
              size={45}
              color={"#DBB22F"}
            />
            {typeCard == "Credit card" ? (
              <TextNewCredit>
                Take control of your finances with a simple activation process –
                just one clicks away from enjoying the convenience of your new
                credit card.
              </TextNewCredit>
            ) : (
              <TextNewCredit>
                Revitalize your financial freedom—act now! Reactivate your debit
                card for uninterrupted access to convenient and secure
                transactions.
              </TextNewCredit>
            )}
          </MenssageView>

          <Button
            primary={false}
            content={`New ${typeCard.toLowerCase()}!`}
            onClick={(e) => {
              if (typeCard == "Debit card") {
                handleCreateCard();
              }
            }}
          />
        </TopView>
      )}
    </ViewTypeCard>
  );
};

export default CardSpace;
