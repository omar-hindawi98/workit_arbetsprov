import Search from './../components/Search/Search';
import {useHistory} from "react-router-dom";

function City() {
    let history = useHistory();

    const pushToResult = (search) => {
        history.push("/city/" + search);
    };

    return (
        <Search type="City" placeholder="Enter a city" title="City" onSearch={pushToResult} />
    );
}

export default City;
