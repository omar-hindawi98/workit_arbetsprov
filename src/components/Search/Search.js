import './Search.scss';
import {useState} from "react";
import { Search as SearchIcon} from 'react-bootstrap-icons';
import {Form, Button} from 'react-bootstrap';

/**
 * A search box component that will be used for parsing the search paramaters
 * Has two props: title and placeholder
 * One return prop: onSearch
 */
function Search(props){
    const [search, setSearch] = useState(null);

    /**
     * Returns the search value to onSearch prop
     * @param e, Event value
     */
    let performSearch = (e) => {
        // Disable HTML Form functions
        e.preventDefault();

        // Prevent empty searches
        if(!search || !search.trim())
            return;

        // Return search string to onSearch prop
        props.onSearch(search);
    };

    /**
     * Sets the state to text field value
     * @param e, Event value
     */
    let handleSearchText = (e) => {
        setSearch(e.target.value);
    };

    return(
        <div>
            <h3>Search by {props.title}</h3>
            <Form onSubmit={performSearch}>
                <Form.Control type="text" placeholder={props.placeholder} onChange={handleSearchText}/>

                <Button variant="primary" type="submit" className="search_button">
                    <SearchIcon/>
                </Button>
            </Form>
        </div>
    )
}

export default Search;
