import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./pages/Home";
import {Map} from "./pages/Map";
import {FormPage} from "./pages/FormPage";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/map">
                            <Map/>
                        </Route>
                        <Route path="/formpage">
                            <FormPage/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
