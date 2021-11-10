import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDate } from '../../actions';
import { formatDate } from '../../utils';
import './style.css';

export const SearchForm = () => {
    const dispatch = useDispatch();

    const [ dateInput, setDateInput ] = useState("");
    const [ formAlert, setFormAlert ] = useState("Select a date");

    const reset = () => {
        setDateInput("");
        setFormAlert("Select a date")
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateDate(dateInput))
        reset();
    }

    const handleInput = e => {
        const selectedDate = new Date(e.target.value)
        const today = new Date()
        if (selectedDate <= today) {            
            setDateInput(formatDate(selectedDate))
            setFormAlert("")
        } else {
            setFormAlert("Date cannot be in the future")
        }
    }

    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={dateInput} onChange={handleInput}/>
            <input
                type="submit"
                disabled={formAlert}
                value={formAlert ? formAlert : "Search"}
            />
        </form>
    );
};
