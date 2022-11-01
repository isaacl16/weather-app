import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistory, getWeather } from "../../redux/features/weatherSlice";
import { selectHistory } from "../../redux/selectors";
import { DeleteIcon, SearchIcon, StyledButton, StyledHeader, StyledRight, StyledRow, StyledWrapper } from "./styled";


const WeatherHistory = () => {
    const dispatch = useDispatch()
    const history = useSelector(selectHistory)
    const removeHistory = useCallback((index) => {
        dispatch(deleteHistory(index))
    }, [dispatch])
    const reSearchWeather = useCallback((weather) => {
        const queryString = weather.city + "," + weather.country
        console.log(queryString)
        dispatch(getWeather(queryString))
    }, [dispatch])

    const renderHistory = useMemo(() => {
        return history.length
            ? history.map((item, index) => {
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
            }) : <p>No records</p>
    }, [history, removeHistory, reSearchWeather])
    return (
        <StyledWrapper>
            <StyledHeader>History</StyledHeader>
            {renderHistory}
        </StyledWrapper >
    )
}

export default WeatherHistory