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

                {data.length && data.map(therapist => <TherapistCard therapist={therapist} />)}
=======
                {therapists && therapists.map(therapist => <li>{therapist.first_name}</li>)}
                {therapists && therapists.map(therapist => <li>{therapist.last_name}</li>)}
                {therapists && therapists.map(therapist => <li>{therapist.address.city}</li>)}

                </ul>
             
                
            </Fragment>)
}

export default TherapistList;