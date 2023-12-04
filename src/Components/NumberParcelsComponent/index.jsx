// styled components
import { ParcelsPayed } from "./style";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NumberParcelsComponent = ({ content }) => {
  const payed =
    parseInt(content.numberPayedParcels) ==
    parseInt(content.numberTotalParcels);

  return (
    <>
      {payed ? (
        <MaterialCommunityIcons
          name="check-circle-outline"
          size={25}
          color={"#2ACB37"}
        />
      ) : (
        <ParcelsPayed>
          {content.numberPayedParcels} / {content.numberTotalParcels}
        </ParcelsPayed>
      )}
    </>
  );
};

export default NumberParcelsComponent;
