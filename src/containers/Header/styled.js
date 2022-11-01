import styled from "styled-components"
import colors from "../../theme/colors"

export const Wrapper = styled.div`
    margin: 30px auto;
    width: 75%;
    border-bottom: 1px solid #ccc;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const StyledHeader = styled.h1`
    margin-top: 30px;
    text-align: center;
    color: ${colors.main}
`