import './CountryResult.scss';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useState} from "react";

/**
 * Returns a Component for Country Result displaying
 * @param props, takes in prop: name, population
 */
function CityResult(props){
    const [toggle, setToggle] = useState(false);

    /**
     * Used for toggling the displayed info
     */
    const toggleInfo = () => {
        setToggle(!toggle);
    };

    return (
        <ListGroupItem className="countryResult" onClick={toggleInfo}>
            {
                toggle
                ? <div className="resultItem">
                    <b>Population</b>
                    <h3>{props.population.toLocaleString()}</h3>
                </div>
                : <div className="resultItem">
                    <h3>{props.name}</h3>
                </div>
            }
        </ListGroupItem>
    );
}

export default CityResult;
