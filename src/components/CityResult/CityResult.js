import './CityResult.scss';
import ListGroupItem from "react-bootstrap/ListGroupItem";

function CityResult(props){
    return (
        <ListGroupItem className="cityResult">
            <b>Population</b>
            <h3>{props.name.toLocaleString()}</h3>
        </ListGroupItem>
    );
}

export default CityResult;
