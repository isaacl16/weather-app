import { createSlice } from "@reduxjs/toolkit"

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {
            city: "",
            country: "",
            description: "",
            temperature: "",
            humidity: "",
            timeZone: "",
        },
        history: [],
    },
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        },
        appendHistory: (state, action) => {
            state.history.push(action.payload)
        }
    },
})

export const { setWeather, appendHistory } = weatherSlice.actions

export default weatherSlice.reducer