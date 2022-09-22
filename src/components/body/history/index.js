import { useDispatch, useSelector } from "react-redux";
import styles from "./history.module.css";

const History = () => {
    const { history } = useSelector((state) => state.weather)
    console.log(history)
    return (
        <div className={styles.history}>
            {
                <ol>
                    {history.map((weather) => {
                        return (
                            <ul>
                                {weather.city + ", " + weather.country}
                                {weather.timeZone}
                                <button>Re-Search</button>
                                <button>Delete</button>
                            </ul>
                        )
                    })}
                </ol>
            }
        </div>
    )
}

export default History