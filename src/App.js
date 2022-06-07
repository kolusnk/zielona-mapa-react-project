import './App.scss';
import {Header} from "./components/Header/Header";
import {Banner} from "./components/Banner/Banner";
import {HowItWorks} from "./components/HowItWorks/HowItWorks";
import {GetToForm} from "./components/GetToForm/GeToForm";

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <HowItWorks/>
            <GetToForm/>
        </>
    );
}

export default App;
