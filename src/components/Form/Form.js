import React, {useState} from 'react'
import {Input} from "./Input";
import {validate} from "./validate";
import db from '../../firebase/firebase';
import {addDoc, collection} from 'firebase/firestore'
import async from "async";


export function Form() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        positionX: '',
        positionY: '',
        trees: ''
    });
    const [errorMessages, setErrorMessages] = useState(null)
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

    const sendToDatabase = async (event) => {
        event.preventDefault()
        const errorMessages = validate(values);
        setErrorMessages(errorMessages)

        if (errorMessages) return


        await addDoc(pinmarkersCollection, {
            name: values.name,
            email: values.email,
            positionX: values.positionX,
            positionY: values.positionY,
            trees: Number(values.trees)
        })

        setValues({name: '', email: '', positionX: '', positionY: '', trees: ''})
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

            <Input
                label='positionX:'
                type='number'
                name='positionX'
                value={values.positionX}
                min={-90}
                max={90}
                errorMessage={errorMessages?.positionX}
                onChange={handleChange}
            />

            <Input
                label='positionY:'
                type='number'
                name='positionY'
                value={values.positionY}
                min={-180}
                max={180}
                errorMessage={errorMessages?.positionY}
                onChange={handleChange}
            />

            <Input
                label='Ilość drzew które widzisz z okna:'
                type='number'
                name='trees'
                value={values.trees}
                min={0}
                max={100}
                onChange={handleChange}
            />

            <button className='btn btn-primary btn-green' onClick={sendToDatabase}>Wyślij</button>
        </form>
    )
}