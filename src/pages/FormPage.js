import React from 'react';
import {Template} from "../components/Template/Template";
import {Banner} from "../components/Banner/Banner";
import {HowItWorks} from "../components/HowItWorks/HowItWorks";
import {GetToForm} from "../components/GetToForm/GeToForm";

export const FormPage = () => {
    return (
        <>
            <div  className="container"style={{padding: "5rem 0"}}>
                <form>
                    <input type="text"/>
                </form>
            </div>
        </>

    )
}