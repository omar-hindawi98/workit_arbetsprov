import './App.scss';
import {City, CityParam, CountryParam, Country, Home} from './../../routes/'
import {Switch, Route} from 'react-router-dom';

/**
 * Application Component is the main component that handles all routes
 */
function App() {
  return (
    <div className="App">
      <h1>CityPop</h1>
      <Switch>
        <Route path="/city/:search" component={CityParam} />
        <Route path="/city" component={City} />
        <Route path="/country/:search" component={CountryParam} />
        <Route path="/country" component={Country} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
