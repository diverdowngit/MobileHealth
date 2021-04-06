import React, { Fragment, useContext } from "react"; 
import TherapistsContext from "../context/TherapistsContext"


const TherapistList = () => {
    const { therapists } = useContext(TherapistsContext)
    return (<Fragment>    
                <ul>
                {therapists && therapists.map(therapist => <li>{therapist.first_name}</li>)}
                {therapists && therapists.map(therapist => <li>{therapist.last_name}</li>)}
                {therapists && therapists.map(therapist => <li>{therapist.address.city}</li>)}
                </ul>
            </Fragment>)
}

export default TherapistList;