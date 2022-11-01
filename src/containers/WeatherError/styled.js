import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledWrapper = styled.div`
    display: block;
`

export const StyledError = styled.p`
    background-color: ${colors.lightRed};
    margin: 16px auto 32px;
    padding: 10px;
    width: 30%;
    text-align: center;
    border: 1px solid ${colors.red};
    border-radius: 5px;
`
