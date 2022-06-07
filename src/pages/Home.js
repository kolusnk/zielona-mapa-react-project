import React from 'react';
import {Template} from "../components/Template/Template";
import {Banner} from "../components/Banner/Banner";
import {HowItWorks} from "../components/HowItWorks/HowItWorks";
import {GetToForm} from "../components/GetToForm/GeToForm";


export const Home = () => {
    return (
        <Template>
            <Banner/>
            <HowItWorks/>
            <GetToForm/>
        </Template>
    )
}