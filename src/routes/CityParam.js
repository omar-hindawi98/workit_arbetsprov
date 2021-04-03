import {useEffect, useState} from 'react';
import axios from "axios";
import apiConfig from './../config/api';
import Error from "../components/Error/Error";
import CityResult from "../components/CityResult/CityResult";
import Spinner from "react-bootstrap/Spinner";

function CityParam(props) {
    const [loading, setLoading] = useState(true); // Loading variable to indicate when the API is fetching data
    const [result, setResult] = useState(null); // Result holder
    const [error, setError] = useState(null); // Error holder

    /**
     * Called when component mounts, tries to fetch from API
     */
    useEffect(() =>{
        // Get from api
        getFromApi(props.match.params.search);
    }, []);

    /**
     * Gets data from API and sets loading to false
     * @param search parameter to query
     */
    const getFromApi = async (search) => {
        await axios.get(`${apiConfig.url}?q=${search}&orderby=relevance&featureClass=P&maxRows=1&username=${apiConfig.name}`)
            .then(res => {
                let data = res.data;
                // No data found, display error
                if(data.totalResultsCount === 0)
                    setError(`No data found for the given city: ${search}`);
                else
                    setResult(data.geonames[0]); // Set first match
            })
            .catch(() => {
                setError("Error when trying to fetch data, please try again!");
            });

        setLoading(false);
    };

    let displayInfo = (result)
        ? <div>
            <h2 className="resultTitle">{result.toponymName}</h2>
            <CityResult name={result.population} />
        </div>
        : <Error message={error} />;

    return (
        <div>
        {
            (loading)
            ? <Spinner animation="border" variant="light" />
            :  displayInfo
        }
        </div>
    );
}

export default CityParam;
