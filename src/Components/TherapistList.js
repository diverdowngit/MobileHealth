import React, { Fragment, useContext, useEffect } from "react"; 
import TherapistsContext from "../context/TherapistsContext"
import TherapistCard from './TherapistCard';



const TherapistList = () => {
    const { data, fetchAPI } = useContext(TherapistsContext);
  
    useEffect(() => {
      fetchAPI()
    } , []);
  
    return (<Fragment>    
                <ul>
                  {data.length && data.map(therapist => <TherapistCard therapist={therapist} /> )}
                </ul>
             
                
            </Fragment>)
}

export default TherapistList;