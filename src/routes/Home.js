import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

/**
 * Home page route, acts as a portal to the two categories, City and Country
 */
function Home() {
    return (
        <div className="Home">
            <Link to="/city">
                <Button variant="primary" size="lg" className="mr-3 homeBtn">
                    Search by City
                </Button>
            </Link>
            <Link to="/country">
                <Button variant="primary" size="lg homeBtn">
                    Search by Country
                </Button>
            </Link>
        </div>
    );
}

export default Home;
