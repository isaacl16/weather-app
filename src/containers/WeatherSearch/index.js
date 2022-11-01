import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../components/Button';
import Search from '../../components/Search';
import { getWeather } from "../../redux/features/weatherSlice";
import { selectStatus } from "../../redux/selectors";
import { ButtonWrapper, SearchWrapper, StyledSearchBar, StyledWrapper } from './styled';

const WeatherSearch = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const status = useSelector(selectStatus)

    const dispatch = useDispatch();

    const searchWeather = useCallback(() => {
        const queryString = [city, country].filter(x => x.trim() !== '').join(',');
        dispatch(getWeather(queryString))
    }, [city, country, dispatch])

    const clearSearchFields = useCallback(() => {
        setCity('');
        setCountry('');
    }, []);

    const checkEnter = useCallback((e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    }, [searchWeather]);

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
        <StyledWrapper>
            <SearchWrapper>
                <StyledSearchBar>
                    <p>City:</p>
                    <Search value={city} onChange={e => setCity(e.target.value)} onKeyPress={checkEnter} />
                </StyledSearchBar>
                <StyledSearchBar>
                    <p>Country:</p>
                    <Search value={country} onChange={e => setCountry(e.target.value)} onKeyPress={checkEnter} />

                </StyledSearchBar>
            </SearchWrapper>
            <ButtonWrapper>
                <Button onClick={searchWeather} disabled={!(city || country)}>Search</Button>
                <Button outline={true} onClick={clearSearchFields} disabled={!(city || country)}>Clear</Button>
            </ButtonWrapper>
        </StyledWrapper>
    );
}

export default WeatherSearch;