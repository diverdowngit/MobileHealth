import React, { useReducer, useContext } from 'react';

import TherapistsContext from '../TherapistsContext';
import AppReducer from './AppReducer';

import {
    FETCH_API
} from '../actions';

const AppState = (props) => {
    const { children } = props;

    const url = `https://cherry-cupcake-02141.herokuapp.com/therapist/`;

    const initialState = {
        data: []
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const fetchAPI = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_API, payload: data }))
        .catch( err => console.log(err));
    }

    return (
        <TherapistsContext.Provider value={{
            data: state.data,
            fetchAPI
        }}>
            {children}
        </TherapistsContext.Provider>
    )
}

export default AppState;