import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../features/weatherSlice'
import { selectError } from '../../redux/selectors'

const WeatherError = () => {
    const error = useSelector(selectError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearError)
    }, [dispatch])

    useEffect(() => {
        console.log("Weather error: ", error)
    }, [error])

    return (
        <>
            {
                error ?
                    <p>
                        {error}
                    </p>
                    : <></>
            }
        </>
    )
}

export default WeatherError