import React from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, Result} from '../../components';

export const Search = () => {
    const error = useSelector(state => state.error)

    return (
        <div id="search">
            <SearchForm />
            

            { error ? <span role="alert">{error}</span>  : <Result /> }  
        </div>
    );

}
