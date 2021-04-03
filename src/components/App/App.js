import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {City, CityParam, CountryParam, Country, Home} from './../../routes/'
import {Switch, Route, useLocation} from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group";

/**
 * Application Component is the main component that handles all routes
 */
function App() {

    let location = useLocation();

    return (
    <div className="App">
      <h1>CityPop</h1>
        <SwitchTransition mode="out-in">
            <CSSTransition
                timeout={300}
                key={(location.key) ? location.key : 0 }
                classNames="fade"
            >
              <Switch location={location}>
                <Route path="/city/:search" component={CityParam} />
                <Route path="/city" component={City} />
                <Route path="/country/:search" component={CountryParam} />
                <Route path="/country" component={Country} />
                <Route path="/" component={Home} />
              </Switch>
            </CSSTransition>
        </SwitchTransition>
    </div>
    );
}

export default App;
