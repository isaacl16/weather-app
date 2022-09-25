import Header from "../../containers/Header";
import Weather from "../../containers/WeatherContainer";
// import Weather from "../../components/weather";

const Main = () => {
    return (
        <>
            <Header />
            <hr className="solid" />
            {/* <Search /> */}
            <Weather />
            {/* <Weather />
            <hr className="solid" />
            <History /> */}
        </>
    )
}

export default Main;