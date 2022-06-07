import './App.scss';
import {Header} from "./components/Header/Header";
import {Banner} from "./components/Banner/Banner";
import {HowItWorks} from "./components/HowItWorks/HowItWorks";
import {GetToForm} from "./components/GetToForm/GeToForm";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <HowItWorks/>
            <GetToForm/>
            <Footer/>
        </>
    );
}

export default App;
