import Header from "../../components/header";
import History from "../../components/history";
import Search from "../../components/search";
import Weather from "../../components/weather";

const Main = () => {
    return (
        <>
            <Header />
            <hr className="solid" />
            <Search />
            <Weather />
            <hr className="solid" />
            <History />
        </>
    )
}

export default Main;