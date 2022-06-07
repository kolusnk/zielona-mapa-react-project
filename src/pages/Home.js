import React from 'react';
import {Banner} from "../components/Banner/Banner";
import {HowItWorks} from "../components/HowItWorks/HowItWorks";
import {GetToForm} from "../components/GetToForm/GeToForm";


export const Home = () => {
    return (
        <>
            <Banner/>
            <HowItWorks/>
            <GetToForm/>
        </>

    )
}