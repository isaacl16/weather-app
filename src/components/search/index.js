import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../features/weatherSlice";
import styles from "./search.module.css";


const Search = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        // e.preventDefault() prevents the page from refreshing
        e.preventDefault();
        searchWeather(city, country)
        clearInputFields();
    };

    const searchWeather = (city, country) => {
        console.log("Dispatch setWeather")
        const query = city + "," + country
        dispatch(getWeather(query))
        // dispatch(setWeather(currentWeather))
        // dispatch(appendHistory(currentWeather))
    }

    const clearInputFields = () => {
        setCity("")
        setCountry("")
    }

    const disableClearButton = () => {
        return city.length === 0 && country.length === 0
    }

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                </label>
                <input type="text" name="city" value={city} className={styles.input} onChange={(e) => { setCity(e.target.value) }} required />
                <label className={styles.label}>
                    Country:
                </label>
                <input type="text" name="country" value={country} className={styles.input} onChange={(e) => { setCountry(e.target.value) }} required />
                <input type="submit" value="Submit" className={styles.button} />
                <input type="button" value="Clear" className={styles.button} onClick={clearInputFields} disabled={disableClearButton()} />
            </form>
        </div >
    )
}

export default Search;