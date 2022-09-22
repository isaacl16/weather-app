import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGeographicCoordinates, getWeather } from "../../../api";
import { appendHistory, setWeather } from "../weatherSlice";
import styles from "./search.module.css";


const Search = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        // e.preventDefault() prevents the page from refreshing
        e.preventDefault();
        searchWeather(city, country)
        handleOnClear();
    };

    const searchWeather = async (city, country) => {
        console.log("Dispatch setWeather")
        const geographicCoordinates = await getGeographicCoordinates(city, country)
        console.log(geographicCoordinates)
        const location = geographicCoordinates.find(location => (location.country.name).toLowerCase() === country.toLowerCase())
        if (location !== undefined) {
            const currentWeather = await getWeather(location.lat, location.lon)
            currentWeather["city"] = city
            currentWeather["country"] = country
            dispatch(setWeather(currentWeather))
            dispatch(appendHistory(currentWeather))
            // dispatch(setWeather({ city, country }))
        } else {
            // Toast here
            console.log("Could not find location")
        }
        // write api call to https://openweathermap.org/api here
        // reducers should stay as pure functions
    }

    const handleOnClear = () => {
        setCity("")
        setCountry("")
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
                <input type="button" value="Clear" className={styles.button} onClick={handleOnClear} />
            </form>
        </div >
    )
}

export default Search;