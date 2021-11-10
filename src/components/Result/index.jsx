import React from 'react';
import IMG from '../../images';
import { useSelector } from 'react-redux';
import { displayDate } from '../../utils';
import { City } from '..';
import './style.css';

export const Result = () => {

    
    const cities = useSelector(state => state.cities)
    const isLoading = useSelector(state => state.loading);
    const date = useSelector(state => displayDate(state.date));

    const renderCities = () => cities.map((c, i) => <City key={i} data={c}/>)

    return (
        <section id="results">
            <div className="sunrise">
                <img src={IMG.sun} alt="Sun" />
            </div>

            <div className="center">
                { isLoading ? 
                    <p>Loading times for {date}. . .</p> :
                    <p>{date}</p> }
            </div>

            <div className="sunset">
                <img src={IMG.moon} alt="Moon" />
            </div>

            { renderCities() }
        </section>
    )
}
