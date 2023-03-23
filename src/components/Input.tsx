import React, { useState } from "react";
import styled from "styled-components"

type InputProps = {
    onData: (city : string , country : string) => void;
}

const InputTextContainer = styled.input`
padding: 5px 10px;
margin-right: 10px;
border: none;
border-bottom: 2px dashed black;
outline: none;
background-color: rgba(233,239,251,255);
`;

const ButtonContainer = styled.button`
background-color: rgba(64,105,135,255);
border-radius: 20px;
color: white;
padding: 5px 10px;
cursor: pointer;
`;

const Input = ({ onData } : InputProps) => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(city && country){
            onData(city, country);
            setCity('');
            setCountry('');
        }
        else{
            alert("Enter city and country");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputTextContainer type="text" placeholder="city" value={city} onChange={handleCity} />
            <InputTextContainer type="text" placeholder="country" value={country} onChange={handleCountry} />
            <ButtonContainer type="submit">Submit</ButtonContainer>
        </form>
    )
}

export default Input