import React, {useState} from 'react'
import {Input} from "./Input";
import {GoogleMapSearch} from "./GoogleMapSearch";
import {validate} from "./validate";
import db from '../../firebase/firebase';
import {addDoc, collection} from 'firebase/firestore'
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";


export function Form() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        trees: ''
    });
    const [adress, setAdress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [errorMessages, setErrorMessages] = useState(null)
    const [adressError, setAdressError] = useState(null)
    const [successInfo, setSuccessInfo] = useState(null)
    const pinmarkersCollection = collection(db, 'pinmarkers')

    function handleChange(event) {
        const {name, value} = event.target

        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }


    const handleSelectLocation = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAdress(value);
        setCoordinates(latLng);
    };

    const sendToDatabase = async (event) => {
        event.preventDefault()
        const errorMessages = validate(values);
        setErrorMessages(errorMessages)
        const successMessage = 'wysłano, dziękujemy!'
        const adressErrorMessage = 'nie podano adresu'


        if (errorMessages) return
        if (!adress) {
            setAdressError(adressErrorMessage)
            return
        }


        await addDoc(pinmarkersCollection, {
            name: values.name,
            email: values.email,
            positionX: coordinates.lat,
            positionY: coordinates.lng,
            trees: Number(values.trees)
        })
        setValues({name: '', email: '', trees: ''})
        setAdress('')
        setSuccessInfo(successMessage)
    }


    return (
        <form className='form'>
            <Input
                label='Imię:'
                type='text'
                name='name'
                value={values.name}
                errorMessage={errorMessages?.name}
                onChange={handleChange}
            />
            <Input
                label='Email:'
                type='email'
                name='email'
                value={values.email}
                errorMessage={errorMessages?.email}
                onChange={handleChange}
            />

            <GoogleMapSearch
                value={adress}
                onChange={setAdress}
                onSelect={handleSelectLocation}
                adressError={adressError}
            />

            <Input
                label='Ilość drzew które widzisz z okna:'
                type='number'
                name='trees'
                value={values.trees}
                min={0}
                max={100}
                errorMessage={errorMessages?.trees}
                onChange={handleChange}
            />

            <div className='button-and-succes'>
                <button className='btn btn-primary btn-green' onClick={sendToDatabase}>Wyślij</button>
                {successInfo && <span className='succes-message'>({successInfo})</span>}<br/>
            </div>
        </form>
    )
}