import React, { useReducer, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import TherapistsContext from '../TherapistsContext';
import AppReducer from './AppReducer';
import serverUrl from '../../utils/serverUrl';

import {
    FETCH_API,
    SET_FILTERED_THERAPISTS
} from '../actions';

const AppState = (props) => {
    const { children } = props;
    const history = useHistory();

    const initialState = {
        data: [],
        filteredTherapists: []
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const checkAvailability = (e, categories) => {

        e.preventDefault();
        const filteredCategories = Object.entries(categories).reduce(
          (acc, [name, { selected }]) => (selected && acc.push(name), acc),
          []
        );
        
        axios
        .get(serverUrl, {
            params: {
                category: filteredCategories,
            },
        })
        .then((res) =>{
            dispatch({ type: SET_FILTERED_THERAPISTS, payload: res.data})
            history.push('/therapistlist')
        })
          .catch((err) => console.log("err", err));
      };
    
    const fetchAPI = () => {
        fetch(serverUrl)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_API, payload: data }))
        .catch( err => console.log(err));
    }

    return (
        <TherapistsContext.Provider value={{
            data: state.data,
            fetchAPI,
            filteredTherapists: state.filteredTherapists,
            checkAvailability
        }}>
            {children}
        </TherapistsContext.Provider>
    )
}

export default AppState;