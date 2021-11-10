import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

// export const SearchForm = () => {
//     const dispatch = useDispatch();

//     const [ dateInput, setDateInput ] = useState("");
//     const [ formAlert, setFormAlert ] = useState("Select a date");

//     const reset = () => {
//         setDateInput("");
//         setFormAlert("Select a date")
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         dispatch(updateDate(dateInput))
//         reset();
//     }

//     const handleInput = e => {
//         const selectedDate = new Date(e.target.value)
//         const today = new Date()
//         if (selectedDate <= today) {            
//             setDateInput(formatDate(selectedDate))
//             setFormAlert("")
//         } else {
//             setFormAlert("Date cannot be in the future")
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} aria-label="form">
//             <label htmlFor="date">Date</label>
//             <input type="date" id="date" value={dateInput} onChange={handleInput}/>
//             <input
//                 type="submit"
//                 disabled={formAlert}
//                 value={formAlert ? formAlert : "Search"}
//             />
//         </form>
//     );
// };
export const SearchForm = () => {
    const [ formData, setFormData ] = useState({ username: ""})
    
    const handleInput = e => {
        // using destructuring to access e.target.name and e.target.value
        const { name, value } = e.target;
        console.log(name, value)
        // note the use of the [square brackets] here so we can use the name variable (instead of accessing a key of .name)
        setFormData({ ...formData, [name]: value }); 
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        console.log('submitted')
    }

    return (

    <form onSubmit={handleSubmit}>
        <input 
            type="text" name="nameInput" 
        />
    </form>
    );
}