import './CountryResult.scss';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

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
            <SwitchTransition mode="out-in">
                <CSSTransition
                    timeout={300}
                    classNames="fade"
                    key={toggle}
                >
                    <div>
                    {
                        toggle
                        ? <div className="resultItem">
                            <b className="population">Population</b>
                            <h3 className="population_digit">{props.population.toLocaleString()}</h3>
                        </div>
                        : <div className="resultItem">
                            <h3>{props.name}</h3>
                        </div>
                    }
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </ListGroupItem>
    );
}

export default CityResult;
