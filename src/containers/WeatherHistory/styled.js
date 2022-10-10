import styled from "styled-components"

export const StyledHeader = styled.h1`
    text-align: start;
`

export const StyledWrapper = styled.div`
    displa
    text-align: start;
    margin-top: 30px;
`

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

