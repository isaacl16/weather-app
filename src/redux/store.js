import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../components/body/weatherSlice";

export default configureStore({
    reducer: {
        weather: weatherReducer,
    }
})