import History from "./history";
import Search from "./search";
import Weather from "./weather";

const Body = () => {
    return (
        <div className="Body">
            <Search />
            <Weather />
            <hr className="solid" />
            <History />
        </div>
    );
}

export default Body;