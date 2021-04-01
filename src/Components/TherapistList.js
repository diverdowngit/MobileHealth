import React, { Fragment, useContext } from "react"; 
import TherapistsContext from "../context/TherapistsContext"


const TherapistList = () => {
    const { therapists } = useContext(TherapistsContext)
    return (<Fragment>    
                <h1>
                    This will show all Therapist depending on your search.
                </h1>
            </Fragment>)
}

export default TherapistList;