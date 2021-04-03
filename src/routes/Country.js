import Search from './../components/Search/Search';
import { useHistory } from "react-router-dom";

function Country(){
    let history = useHistory();

    const pushToResult = (search) => {
        history.push("/country/" + search);
    };

    return (
        <Search type="Country" placeholder="Enter a Country" title="Country" onSearch={pushToResult} />
    );
}

export default Country;
