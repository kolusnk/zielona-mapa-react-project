import './App.scss';
import {Header} from "./components/Header/Header";
import {Banner} from "./components/Banner/Banner";
import {HowItWorks} from "./components/HowItWorks/HowItWorks";

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <HowItWorks/>
        </>
    );
}

export default App;
