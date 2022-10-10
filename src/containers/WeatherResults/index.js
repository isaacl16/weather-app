import { useSelector } from "react-redux"
import { selectWeather } from "../../redux/selectors"
import { StyledImage, WeatherBox, Wrapper } from "./styled"

const WeatherResults = () => {
    const weather = useSelector(selectWeather)
    console.log(weather)
    return (
        <>
            {
                weather ?
                    <Wrapper>
                        <WeatherBox>
                            <p>
                                City: {weather.city + ", " + weather.country}
                            </p>
                            <StyledImage weather={weather.main} />
                            <p>
                                Description: {weather.description}
                            </p>
                            <p>
                                Temperature: {weather.temperature}
                            </p>

                            <p>
                                Humidity: {weather.humidity}
                            </p>
                            <p>
                                Time: {weather.time}
                            </p>
                        </WeatherBox>
                    </Wrapper>
                    : <></>
            }
        </>
    )
}

export default WeatherResults;