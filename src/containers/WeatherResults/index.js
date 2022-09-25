import { useSelector } from "react-redux"
import { selectWeather } from "../../redux/selectors"

const WeatherResults = () => {
    const weather = useSelector(selectWeather)
    return (
        <>
            {
                weather ?
                    <p>
                        City: {weather.city + ", " + weather.country}
                        <br />
                        {weather.main}
                        <br />
                        description: {weather.description}
                        <br />
                        temperature: {weather.temperature}
                        <br />
                        humidity: {weather.humidity}
                        <br />
                    </p>
                    : <></>
            }
        </>
    )
}

export default WeatherResults;