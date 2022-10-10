import styled from "styled-components";
import weatherIcon from "../../theme/weatherIcon";

export const WeatherBox = styled.div`
    margin-top: 30px;
    border: 1px solid #000000;
    margin: 2rem auto;
    padding: 1rem 2rem;
`

export const Wrapper = styled.div`
    display: flex;
`

export const StyledImage = styled.div`
    margin: auto;
    height: 48px;
    width: 48px;
    background: url(/icons/icons.png);
    background-position: ${props => weatherIcon[props.weather]} }} 
`