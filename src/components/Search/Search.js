import './Search.scss';
import {useState} from "react";
import { Search as SearchIcon} from 'react-bootstrap-icons';
import {Form, Button} from 'react-bootstrap';
import invalid_chars from './../../modules/invalid_char';

/**
 * A search box component that will be used for parsing the search paramaters
 * Has two props: title and placeholder
 * One return prop: onSearch
 */
function Search(props){
    const [search, setSearch] = useState("");
    const [invalid, setInvalid] = useState(false);

    /**
     * Returns the search value to onSearch prop
     * @param e, Event value
     */
    let performSearch = (e) => {
        // Disable HTML Form functions
        e.preventDefault();

        // Prevent empty searches && invalid chars
        if(!invalid_chars.test(search) || !search.trim())
            return;

        // Return search string to onSearch prop
        props.onSearch(search);
    };

    /**
     * Sets the state to text field value
     * @param e, Event value
     */
    let handleSearchText = (e) => {
        let search_value = e.target.value;
        setSearch(search_value);

        // Prevent invalid characters
        if(!invalid_chars.test(search_value) && search_value.trim()){
            setInvalid(true);
            return;
        }

        // Reset invalid
        setInvalid(false);
    };

    return(
        <div>
            <h2 className="mt-4 mb-4">Search by {props.title}</h2>
            <Form onSubmit={performSearch}>
                <Form.Group>
                    <Form.Control type="text" placeholder={props.placeholder} onChange={handleSearchText} className="search_field" isInvalid={invalid} required/>
                    <Form.Control.Feedback type="invalid" className="feedback">
                        The search may only contain alphabetical characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="search_button">
                    <SearchIcon/>
                </Button>
            </Form>
        </div>
    )
}

export default Search;
