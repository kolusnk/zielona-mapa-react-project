import React, { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { GoogleMapSearch } from "./GoogleMapSearch";
import { validate } from "./validate";
import db from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export function Form() {
  // określenie stanów i utworzenie przydatnych zmiennych //

  const [values, setValues] = useState({
    name: "",
    email: "",
    trees: "",
    view: "",
    noise: "",
    floor: "",
  });
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [adress, setAdress] = useState("");
  const [errorMessages, setErrorMessages] = useState(null);
  const [adressError, setAdressError] = useState(null);
  const [successInfo, setSuccessInfo] = useState(null);
  const pinmarkersCollection = collection(db, "pinmarkers");

  // obsługa zmiany wartości inputów i uaktualnienie ich stanu//

  function handleChange(event) {
    const { name, value } = event.target;
    console.log([event.target]);
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  // obsługa WYBORU ADRESU i uaktualnienie jego stanu //

  const handleSelectLocation = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAdress(value);
    setCoordinates(latLng);
  };

  // wysyłanie wartości formularza do bazy danych //

  const sendToDatabase = async (event) => {
    event.preventDefault();
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
    const successMessage = "wysłano, dziękujemy!";
    const adressErrorMessage = "nie podano adresu";

    // jeśli są błędy - nie wysyłaj //

    if (errorMessages) return;
    if (!adress) {
      setAdressError(adressErrorMessage);
      return;
    }

    // jeśli nie ma błędów - wysyłaj i resetuj stan inputów //

    await addDoc(pinmarkersCollection, {
      name: values.name,
      email: values.email,
      adress: adress,
      positionX: coordinates.lat + Math.random() * 0.0005,
      positionY: coordinates.lng + Math.random() * 0.0005,
      trees: values.trees,
      view: values.view,
      noise: values.noise,
      floor: values.floor,
    });
    setValues({ name: "", email: "", trees: "", view: "", noise: "", floor: "" });
    setAdress("");
    setAdressError("");
    setSuccessInfo(successMessage);
  };

  return (
    <form className="form">
      <Input label="Imię:" type="text" name="name" value={values.name} errorMessage={errorMessages?.name} onChange={handleChange} />
      <Input label="Email:" type="email" name="email" value={values.email} errorMessage={errorMessages?.email} onChange={handleChange} />

      <GoogleMapSearch
        label="Adres:"
        value={adress}
        onChange={setAdress}
        onSelect={handleSelectLocation}
        adressError={adressError}
        errorMessage={errorMessages?.adress}
      />

      <Select
        label="Ilość drzew które widzisz z okna:"
        name="trees"
        value={values.trees}
        options={["0", "1-5", "5-10", "10-20", "więcej...", "park", "las"]}
        errorMessage={errorMessages?.trees}
        onChange={handleChange}
      />

      <Select
        label="Jaki jest widok z okna:"
        name="view"
        value={values.view}
        errorMessage={errorMessages?.view}
        options={["podwórko", "parking", "ulica", "otwarta przestrzeń", "natura", "inne"]}
        onChange={handleChange}
      />

      <Input
        label="Piętro na którym mieszkasz:"
        type="number"
        name="floor"
        value={values.floor}
        min={0}
        max={11}
        errorMessage={errorMessages?.floor}
        onChange={handleChange}
      />

      <Select
        label="Poziom hałasu:"
        name="noise"
        value={values.noise}
        errorMessage={errorMessages?.noise}
        options={["cicho", "głośno"]}
        onChange={handleChange}
      />

      <div className="button-and-succes">
        <button className="btn btn-primary btn-green" onClick={sendToDatabase}>
          Wyślij
        </button>
        {successInfo && <span className="succes-message">({successInfo})</span>}
        <br />
      </div>
    </form>
  );
}
