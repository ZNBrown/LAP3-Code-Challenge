// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setError } from '../../actions';
// import { API_URL } from '../../constants';
// import axios from 'axios';
// import { formatDate, formatTime } from '../../utils';

// export const City = ({ data }) => {

//     const { name, tz, lat, long } = data;

//     const [ times, setTimes ] = useState({ sunrise: "", sunset: "" });
//     const date = useSelector(state => formatDate(state.date));
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const getTimes = async () => {
//             try {
//                 const { data } = await axios.get(`${API_URL}?lat=${lat}&lng=${long}&date=${date}&formatted=0`);
//                 setTimes(data.results)
//             } catch (err) {
//                 dispatch(setError(err))
//             }
//         }
//         getTimes()
//     }, [date])


//     return (
//         <>
//             <div className="sunrise" aria-label="sunrise time">
//                 <p>{times.sunrise && formatTime(times.sunrise, tz)}</p>
//             </div>
            
//             <div className="center">
//                 <h2>{name}</h2>
//             </div>

//             <div className="sunset" aria-label="sunset time">
//                 <p>{times.sunset && formatTime(times.sunset, tz)}</p>
//             </div>
//         </> 
//     )
// }
