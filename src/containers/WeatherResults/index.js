import { useMemo } from "react"
import { useSelector } from "react-redux"
import { selectWeather } from "../../redux/selectors"
import { StyledImage, StyledWrapper, WeatherBox } from "./styled"

const WeatherResults = () => {
    const weather = useSelector(selectWeather)
  
    const renderWeather = useMemo(() => {
        return weather ?
            <WeatherBox>
                <p>
                    City: {weather.city + ", " + weather.country}
                </p>
                <h1>{weather.main}</h1>
                <StyledImage weather={weather.main} />
                <p>
                    Description: {weather.description}
                </p>
                <p>
                    Temperature: {weather.temperature}
                </p>

                <p>
                    Humidity: {weather.humidity}%
                </p>
                <p>
                    Time: {weather.time}
                </p>
            </WeatherBox>
            : <></>
    }, [weather])
    return (
        <StyledWrapper>
            {renderWeather}
        </StyledWrapper>
    )
}

export default WeatherResults;
