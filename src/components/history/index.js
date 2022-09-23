import { useDispatch, useSelector } from "react-redux";
import { deleteHistory, getWeather } from "../../features/weatherSlice";
import { selectHistory } from "../../redux/selectors";
import styles from "./history.module.css";

const History = () => {
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
        <div className={styles.history}>
            {
                <ol>
                    {history.map((weather, index) => {
                        return (
                            <li key={index}>
                                {weather.city + ", " + weather.country}
                                {weather.timeZone}
                                <button onClick={() => reSearchWeather(weather)}>Re-Search</button>
                                <button onClick={() => removeHistory(index)}>Delete</button>
                            </li>
                        )
                    })}
                </ol>
            }
        </div>
    )
}

export default History