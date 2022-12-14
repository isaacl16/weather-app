import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchWeather } from "../../api"
import { formatTime, getCurrentTime, tempRange } from "../../utils"

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (queryString, { rejectWithValue }) => {
        try {
            const res = await fetchWeather(queryString)
            const data = res.data
            if (res.data !== null) {
                return {
                    search: {
                        city: data.name,
                        country: data.sys.country,
                        time: getCurrentTime()
                    },
                    weather: {
                        country: data.name,
                        city: data.sys.country,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        temperature: tempRange(data.main.temp_min, data.main.temp_max),
                        humidity: data.main.humidity,
                        time: formatTime(data.dt, data.timezone),
                    }
                }
            } else {
                return rejectWithValue({ error: "Not found" })
            }
        } catch (err) {
            return rejectWithValue({ error: err.message })
        }
    }
)

const initialState = {
    data: null,
    error: null,
    status: `idle`,
    history: [],
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        deleteHistory: (state, action) => {
            state.history.splice(action.payload.index, 1)
        },
        clearWeather: (state, action) => {
            state.data = null
        }
    },
    extraReducers: {
        [getWeather.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
            state.error = null;
        },
        [getWeather.fulfilled]: (state, action) => {
            state.data = action.payload.weather;
            if (state.history.length >= 10) {
                state.history.splice(9, 1);
            }
            state.history.unshift(action.payload.search)
            state.error = null;
        },
        [getWeather.rejected]: (state, action) => {
            state.status = 'failed';
            state.data = null;
            state.error = action.payload?.error;
        },
    },
})

export const { deleteHistory, clearError, clearWeather } = weatherSlice.actions

export default weatherSlice.reducer