import React, { Fragment, useContext, useEffect } from "react"; 
import TherapistsContext from "../context/TherapistsContext"
import TherapistCard from './TherapistCard';
import ProfilePage from "./ProfilePage";



const TherapistList = () => {
    const { data, fetchAPI } = useContext(TherapistsContext);
  
    useEffect(() => {
      fetchAPI()
    } , []);
  
    return (<Fragment>    
                <ul>
                  {data.length && data.map(therapist => <TherapistCard therapist={therapist} /> )}
                </ul>
                {/* <ul>
                  {data.length && data.map(therapist => <ProfilePage therapist={therapist} /> )}
                </ul> */}

                
            </Fragment>)
}

export default TherapistList;