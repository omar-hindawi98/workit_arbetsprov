import './CityResult.scss';
import ListGroupItem from "react-bootstrap/ListGroupItem";

/**
 * Returns a Component for City Result displaying
 * @param props, takes in prop: name
 */
function CityResult(props){
    return (
        <ListGroupItem className="cityResult">
            <b className="population">Population</b>
            <h3 className="population_digit">{props.name.toLocaleString()}</h3>
        </ListGroupItem>
    );
}

export default CityResult;
