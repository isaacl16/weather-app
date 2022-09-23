import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../features/weatherSlice";
import { selectError, selectWeather } from "../../redux/selectors";
import styles from "./weather.module.css";
const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(selectWeather)
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(clearError)
    }, [dispatch])
    // const convertTimeZone = (timeZone) => {
    //     return new Date(Date.now()).toLocaleString("en-US")
    // }
    //const dateTime = convertTimeZone(weather.timeZone)
    return (
        <div className={styles.weather}>
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
            {
                error ?
                    <p>
                        {error}
                    </p>
                    : <></>
            }
        </div>
    )
}

export default Weather;