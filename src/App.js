import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home";
import {MapPage} from "./pages/MapPage";
import {FormPage} from "./pages/FormPage";


function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/map">
                            <MapPage/>
                        </Route>
                        <Route path="/formpage">
                            <FormPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
