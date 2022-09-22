import { useSelector } from "react-redux";
import styles from "./weather.module.css";
const Weather = () => {
    const { weather } = useSelector(state => state.weather)

    const convertTimeZone = (timeZone) => {
        return new Date(Date.now()).toLocaleString("en-US")
    }

    const dateTime = convertTimeZone(weather.timeZone)
    return (
        <div className={styles.weather}>
            <p>
                City: {weather.city + ", " + weather.country}
                <br />
                {weather.currentWeather}
                <br />
                description: {weather.description}
                <br />
                temperature: {weather.temperature}
                <br />
                humidity: {weather.humidity}
                <br />
                time: {dateTime}
            </p>
        </div>
    )
}

export default Weather;