import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

export const SearchForm = () => {
    const dispatch = useDispatch();


    const [ formData, setFormData ] = useState("")
    const [ formAlert, setFormAlert ] = useState("Type a name");
    
    const handleInput = e => {
        if (e.target.value.length > 1) {            
            setFormData(e.target.value)
            setFormAlert("")
        } else {
            setFormAlert("Username must be at least 1 character")
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log('submitted')
        dispatch({ type: 'UPDATE_NAME', payload: e.target[0].value})
    }

    return (
    <form onSubmit={handleSubmit} aria-label>
<<<<<<< HEAD
        <input type="text" id="name"  placeholder="Username" onChange={handleInput} /> 
=======
        <label htmlFor="text">GitHub username</label>
        <input type="text" id="name"  onChange={handleInput} /> 
>>>>>>> staging
        <input
            type="submit"
            disabled={formAlert}
            value={formAlert ? formAlert : "Search"}
        />
    </form>
    );


};
