// styled components
import { Background, BottomView, MenssageView, TextNewCredit, TopView } from "./style"
import { Subtitle } from "../FinishPay/style"

// layout 
import CardSpace from "../../Layout/CardSpace";

// components
import { ScrollView } from "react-native"
import Button from "../../Components/Button";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// axios
import { api } from "../../service/api";
import { useEffect, useState } from "react";

// zustand
import { useAuthStore } from "../../store/authStore";

const Cards = () => {
    const [debitCard, setDebitCard] = useState()
    const [creditCard, setCreditCard] = useState()

    const auth = useAuthStore((state) => state.accessToken);

    const header = {
        Authorization: "Bearer " + auth,
    };

    const fetchAllCard = async () => {
        await api
            .get("/api/card/", { headers: header })
            .then((response) => {
                for (const card of response.data) {
                    if (card.type_card == "Debit") {
                        setDebitCard(card)
                    } else {
                        setCreditCard(card)
                    }
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchAllCard()
    }, [])

    return (
        <ScrollView>
            <Background>
                <TopView>
                    <MenssageView>
                        <MaterialCommunityIcons name="credit-card-plus-outline" size={45} color={"#DBB22F"} />
                        <TextNewCredit>Take control of your finances with a simple activation process – just one clicks away from enjoying the convenience of your new credit card.</TextNewCredit>
                    </MenssageView>

                    <Button
                        primary={false}
                        content="New credit card!"
                        onClick={(e) => console.log("oi")}
                    />
                </TopView>

                <BottomView>
                    <Subtitle>My Cards:</Subtitle>

                    <CardSpace typeCard="Debit card" card={debitCard} />

                    <CardSpace typeCard="Credit card" card={creditCard} />
                </BottomView>
            </Background>
        </ScrollView>
    )
}

export default Cards