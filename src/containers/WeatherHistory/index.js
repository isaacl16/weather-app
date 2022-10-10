import { useDispatch, useSelector } from "react-redux";
import { deleteHistory, getWeather } from "../../features/weatherSlice";
import { selectHistory } from "../../redux/selectors";
import { DeleteIcon, SearchIcon, StyledButton, StyledHeader, StyledRight, StyledRow, StyledWrapper } from "./styled";


const WeatherHistory = () => {
    const dispatch = useDispatch()
    const history = useSelector(selectHistory)
    const removeHistory = (index) => {
        dispatch(deleteHistory(index))
    }
    const reSearchWeather = (weather) => {
        const queryString = weather.city + "," + weather.country
        console.log(queryString)
        dispatch(getWeather(queryString))
    }
    return (
        <StyledWrapper>
            <StyledHeader>History</StyledHeader>
            {history.map((item, index) => {
                return (
                    <StyledRow key={index}>
                        <p>{index + 1}.  {item.city + ", " + item.country}</p>
                        <StyledRight>
                            <p>{item.time}</p>
                            <StyledButton onClick={() => reSearchWeather(item)}><SearchIcon /></StyledButton>
                            <StyledButton onClick={() => removeHistory(index)}><DeleteIcon /></StyledButton>
                        </StyledRight>
                    </StyledRow>
                )
            })}
        </StyledWrapper >
    )
}

export default WeatherHistory