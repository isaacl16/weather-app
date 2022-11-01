import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../redux/features/weatherSlice'
import { selectError } from '../../redux/selectors'
import { StyledError, StyledWrapper } from "./styled"

const WeatherError = () => {
    const error = useSelector(selectError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearError)
    }, [dispatch])

    useEffect(() => {
        console.log("Weather error: ", error)
    }, [error])

    return error ?
        <StyledWrapper>
            <StyledError>
                {error}
            </StyledError>
        </StyledWrapper>
        : <></>
}

export default WeatherError