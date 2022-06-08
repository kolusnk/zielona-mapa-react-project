import React from 'react';
import {Banner} from "../components/Banner/Banner";
import {HowItWorks} from "../components/HowItWorks/HowItWorks";
import {GetToForm} from "../components/GetToForm/GeToForm";
import {Template} from "../components/Template/Template";


export const Home = () => {
    return (
        <Template>
            <Banner/>
            <HowItWorks/>
            <GetToForm/>
        </Template>

    )
}