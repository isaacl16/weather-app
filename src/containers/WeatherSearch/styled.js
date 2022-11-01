import styled from "styled-components/macro";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;  justify-content: center;

`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 300px;
      justify-content: space-between;
      display: flex;
      margin-bottom: 1rem;
    }
`;
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem 0;
    button {
      width: 120px;
    }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  p {
    margin: 0 10px 0 0;
  }
`;
