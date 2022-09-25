import WeatherError from "../WeatherError"
import WeatherHistory from "../WeatherHistory"
import WeatherResults from "../WeatherResults"
import WeatherSearch from "../WeatherSearch"

const WeatherContainer = () => {
    return (
        <>
            <WeatherSearch />
            <WeatherResults />
            <WeatherError />
            <WeatherHistory />
        </>
    )
}

export default WeatherContainer