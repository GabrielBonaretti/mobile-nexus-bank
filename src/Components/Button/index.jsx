import { ButtonStyled, TextStyled } from "./style"

const Button = ({ primary, content, onClick, disabled }) => {
    return (
        <ButtonStyled $primary={primary} onPress={onClick} disabled={disabled}>
            <TextStyled $primary={primary} >{content}</TextStyled>
        </ButtonStyled>
    )
}

export default Button