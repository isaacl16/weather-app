import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledHeader = styled.h1`
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    color: ${colors.main}
`

export const StyledWrapper = styled.div`
    display: block;
    text-align: start;
    margin: 0 auto;
    width: 75%;
    @media (max-width: 768px) {
        width: 100%;
    }
    p {
        text-align: center;
    }
`

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
`

export const StyledRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const StyledButton = styled.button`
    display: block;
    width: 32px;
    height: 32px;
    padding: 8px;
    margin-left: 8px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    img {
        height: 16px;
        width: 16px;
    }
`

export const SearchIcon = styled.img.attrs({
    src: "/icons/search.png"
})``

export const DeleteIcon = styled.img.attrs({
    src: "/icons/delete.png"
})``

