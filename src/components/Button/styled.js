import styled from "styled-components";
import colors from "../../theme/colors";
export const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  margin-right: 0.5rem;
  background-color: ${props => props.outline ? colors.transparent : colors.main};
  border: ${props => props.outline ? `1px solid ${colors.main}` : 'none'};
  color: ${props => props.outline ? colors.main : colors.white};
  // background-color: #E8F0FC;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
