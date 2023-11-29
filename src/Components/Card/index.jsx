import { ImageBackground, Text } from "react-native"
import { Background, TextNumber, TextStyled, ViewInfo } from "./style"


const Card = ({ card }) => {
    return (
        <>
            {card ? (

                <Background>
                    <ImageBackground
                        source={require("../../images/a.png")}
                        resizeMode="cover"
                        style={{ width: "100%", height: 200 }}
                    >
                        <TextNumber style={{ fontWeight: 600 }}>{card.number}</TextNumber>
                        <ViewInfo>
                            <TextStyled style={{ fontWeight: 600 }}>{card.cvv}</TextStyled>
                            <TextStyled style={{ fontWeight: 600 }}>{card.date}</TextStyled>
                        </ViewInfo>
                    </ImageBackground>
                </Background>
            ) : (
                <Text>tESTE</Text>
            )}
        </>
    )
}

export default Card