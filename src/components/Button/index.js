import { StyledButton } from "./styled";

const Button = ({ children, onClick, outline, disabled }) => {
    return (
        <StyledButton
            onClick={onClick}
            outline={outline}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button