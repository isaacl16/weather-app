import { StyledInput } from "./styled";

const Search = ({ onChange, onKeyPress, value }) => {
    return (
        <StyledInput type='text' onChange={onChange} onKeyPress={onKeyPress} value={value}></StyledInput>
    );
}

export default Search