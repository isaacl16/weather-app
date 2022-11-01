import Header from "../../containers/Header";
import WeatherError from "../../containers/WeatherError";
import WeatherHistory from "../../containers/WeatherHistory";
import WeatherResults from "../../containers/WeatherResults";
import WeatherSearch from "../../containers/WeatherSearch";
import { StyledLayout } from "./styled";
// import Weather from "../../components/weather";

const Main = () => {
    return (
        <StyledLayout>
            <Header />
            <WeatherSearch />
            <WeatherResults />
            <WeatherError />
            <WeatherHistory />
        </StyledLayout>
    )
}

export default Main;