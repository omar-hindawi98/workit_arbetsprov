import {useEffect, useState} from 'react';
import axios from "axios";
import apiConfig from './../config/api';
import Error from "../components/Error/Error";
import CityResult from "../components/CityResult/CityResult";
import Spinner from "react-bootstrap/Spinner";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import ListGroup from "react-bootstrap/ListGroup";
import CountryResult from "../components/CountryResult/CountryResult";

function CityParam(props) {
    const [loading, setLoading] = useState(true); // Loading variable to indicate when the API is fetching data
    const [result, setResult] = useState(null); // Result holder
    const [error, setError] = useState(null); // Error holder

    // Check for type in search
    const allowedTypes = ["city", "country"];
    const type = props.match.params.type.toLowerCase();

    /**
     * Called when component mounts, tries to fetch from API
     */
    useEffect(() =>{
        // Get from api
        if(!allowedTypes.includes(allowedTypes))
            getFromApi(props.match.params.search);
    }, []);

    /**
     * Gets data from API and sets loading to false
     * @param search parameter to query
     */
    const getFromApi = async (search) => {
        let query;
        if(type === "city")
            query = `${apiConfig.url}?q=${search}&orderby=relevance&featureClass=P&maxRows=1&username=${apiConfig.name}`;
        else if(type === "country")
            query = `${apiConfig.url}?q=${search}&orderby=population&featureClass=P&maxRows=${apiConfig.max_cities}&username=${apiConfig.name}`;

        await axios.get(query)
            .then(res => {
                let data = res.data;
                // No data found, display error
                if(data.totalResultsCount === 0)
                    setError(`No data found for the given ${type}: ${search}`);
                else{
                    if(type === "city")
                        setResult(data.geonames[0]); // Set first match
                    else if(type === "country")
                        setResult(data.geonames);
                }

            })
            .catch(() => {
                setError("Error when trying to fetch data, please try again!");
            });

        setLoading(false);
    };

    // Display Error when invalid search type
    if(!allowedTypes.includes(type))
        return (<Error message="The page does not seem to exist" />);


    // Checks whether to display error or result
    let displayInfo = (result)
        ? <div>
            {
                // Display for city
                type === "city" &&
                <div>
                    <h2 className="resultTitle">{result.toponymName}</h2>
                    <CityResult name={result.population} />
                </div>
            }
            {
                // Display for country
                type === "country" &&
                <div>
                    <h2 className="resultTitle">{result[0].countryName}</h2>
                    <ListGroup>
                        {result.map((city) => <CountryResult name={city.name} population={city.population} key={city.geonameId} />)}
                    </ListGroup>
                </div>
            }
        </div>
        : <Error message={error} />;

    return (
        <div>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    timeout={300}
                    key={loading}
                    classNames="fade"
                >
                    {
                        (loading)
                            ? <Spinner animation="border" variant="light" />
                            :  displayInfo
                    }
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default CityParam;
