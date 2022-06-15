import React, {useState} from 'react'
import {Input} from "./Input";
import {Select} from "./Select";
import {GoogleMapSearch} from "./GoogleMapSearch";
import {validate} from "./validate";
import db from '../../firebase/firebase';
import {addDoc, collection} from 'firebase/firestore'
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";


export function Form() {

    // określenie stanów i utworzenie przydatnych zmiennych //

    const [values, setValues] = useState({
        name: '',
        email: '',
        trees: '',
        noice: '',
        floor: ''
    });
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [adress, setAdress] = useState("");
    const [errorMessages, setErrorMessages] = useState(null)
    const [adressError, setAdressError] = useState(null)
    const [successInfo, setSuccessInfo] = useState(null)
    const pinmarkersCollection = collection(db, 'pinmarkers')

    // obsługa zmiany wartości inputów i uaktualnienie ich stanu//

    function handleChange(event) {
        const {name, value} = event.target
        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    // obsługa WYBORU ADRESU i uaktualnienie jego stanu //

    const handleSelectLocation = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAdress(value);
        setCoordinates(latLng);
    };

    // wysyłanie wartości formularza do bazy danych //

    const sendToDatabase = async (event) => {
        event.preventDefault()
        const errorMessages = validate(values);
        setErrorMessages(errorMessages)
        const successMessage = 'wysłano, dziękujemy!'
        const adressErrorMessage = 'nie podano adresu'

        // jeśli są błędy - nie wysyłaj //

        if (errorMessages) return
        if (!adress) {
            setAdressError(adressErrorMessage)
            return
        }

        // jeśli nie ma błędów - wysyłaj i resetuj stan inputów //

        await addDoc(pinmarkersCollection, {
            name: values.name,
            email: values.email,
            adress: adress,
            positionX: coordinates.lat + (Math.random()*0.001),
            positionY: coordinates.lng + (Math.random()*0.001),
            trees: Number(values.trees),
            noice: values.noice,
            floor: values.floor
        })
        setValues({name: '', email: '', trees: '', noice:'', floor: ''})
        setAdress('')
        setAdressError('')
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
                errorMessage={errorMessages?.adress}

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

            <Input
                label='Piętro na którym mieszkasz:'
                type='number'
                name='floor'
                value={values.floor}
                min={0}
                max={11}
                errorMessage={errorMessages?.floor}
                onChange={handleChange}
            />

            <Select
                label='Poziom hałasu:'
                name='noice'
                value={values.noice}
                errorMessage={errorMessages?.noice}
                options={['cicho', 'głośno']}
                onChange={handleChange}
            />


            <div className='button-and-succes'>
                <button className='btn btn-primary btn-green' onClick={sendToDatabase}>Wyślij</button>
                {successInfo && <span className='succes-message'>({successInfo})</span>}<br/>
            </div>
        </form>
    )
}