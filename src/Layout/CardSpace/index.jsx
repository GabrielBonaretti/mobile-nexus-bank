// styled components
import { SubsubTitle, ViewCard, ViewTypeCard } from "./style"

// components
import Card from "../../Components/Card"
import Button from "../../Components/Button"

const CardSpace = ({ typeCard, card }) => {
    return (
        <ViewTypeCard>
            <SubsubTitle>{typeCard}</SubsubTitle>

            <ViewCard>
                <Card card={card}/>
                <Button
                    primary={false}
                    content="block"
                    onClick={(e) => console.log("bloqueou 1")}
                />
            </ViewCard>
        </ViewTypeCard>
    )
}

export default CardSpace