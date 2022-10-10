import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../features/weatherSlice";
import { selectStatus } from "../../redux/selectors";
import { ButtonWrapper, InputWrapper, Wrapper } from "./styled";
import styles from "./wearchSearch.module.css";


const WeatherSearch = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const status = useSelector(selectStatus)

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        // e.preventDefault() prevents the page from refreshing
        e.preventDefault();
        searchWeather(city, country)
    };

    const searchWeather = (city, country) => {
        const query = city + "," + country
        dispatch(getWeather(query))
    }

    const clearInputFields = () => {
        setCity("")
        setCountry("")
    }

    useEffect(() => {
        if (status === 'success') {
            setCity("")
            setCountry("")
        }
    }, [status])



    const disableClearButton = () => {
        return city.length === 0 && country.length === 0
    }

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <InputWrapper>
                    <label>
                        City:
                    </label>
                    <input type="text" name="city" value={city} className={styles.input} onChange={(e) => { setCity(e.target.value) }} required />
                    <label className={styles.label}>
                        Country:
                    </label>
                    <input type="text" name="country" value={country} className={styles.input} onChange={(e) => { setCountry(e.target.value) }} required />
                </InputWrapper>
                <ButtonWrapper>
                    <input type="submit" value="Submit" className={styles.button} />
                    <input type="button" value="Clear" className={styles.button} onClick={clearInputFields} disabled={disableClearButton()} />
                </ButtonWrapper>
            </Wrapper>
        </form>
    )
}

export default WeatherSearch;