import { ButtonStyled, TextStyled } from "./style"

const Button = ({ primary, content, onClick }) => {
    return (
        <>
            {primary ? (
                <ButtonStyled $primary onPress={onClick}>
                    <TextStyled $primary>{content}</TextStyled>
                </ButtonStyled>
            ) : (
                <ButtonStyled onPress={onClick}>
                    <TextStyled>{content}</TextStyled>
                </ButtonStyled>
            )}
        </>
    )
}

export default Button