import React, { useState, useEffect } from "react";
import {
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
} from "mdbreact";
import benJammin from "../images/benJammin.png";
import { useParams } from "react-router-dom";
import axios from 'axios';


const ProfilePage = () => {

  const { id } = useParams()
  const [therapist, setTherapist] = useState()
  const [loading, setloading] = useState(true)

  useEffect(() => {
    axios(`https://cherry-cupcake-02141.herokuapp.com/therapist/${id}`)
    .then(response => {
      setloading(false)
      setTherapist(response.data)
    });
  }, [id])

  therapist && console.log(therapist)

  if (loading) {
    return (
      <h1>Loading....</h1>
    )
  }

  if (therapist) {
    return (
      <MDBContainer className="bc-grey" style={{ padding: 15 }}>
        {" "}
        <h3 className="bc-grey">Profile</h3>
        {/* <h3>{}</h3> */}
        <MDBCardTitle >
          {/* Dr. {therapist["first_name"]} {therapist["last_name"]}{" "} */}
        </MDBCardTitle>
        <MDBContainer className="d-flex justify-content-left mb-6 mt-5 ">
          <MDBRow>
            <MDBCol>
            <img
              style={{ padding: 0 }}
              src={benJammin}
              className="rounded float-left"
              width="120"
              height="150"
              alt="aligment"
            />
      
            <h1>{therapist.first_name} {therapist.first_name}</h1>
            <br />

            <p>{therapist.category}</p>
            <br />
            <p>{therapist.emailAddress}</p>
            <p>{therapist.address.streetName} {therapist.address.streetNumber},</p>
            <p>{therapist.address.postalCode} {therapist.address.city}</p>
            <p>{therapist.phoneNumber}</p>
            </MDBCol>
           

          </MDBRow>
          <MDBCol>
            <MDBBtn
              className="rounded float-center"
              style={{ padding: 20 }}
              color="green"
            >
              Make Appointment
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6" className="mb-6">
            <MDBCard>
            {/* {therapist["about"]} */}
              About
              <p>{therapist.about}</p>
            </MDBCard>
            <br></br>
            <MDBCard>
            {/* {therapist['education']} {therapist['background']}  */}
              Education and Background
              <p>{therapist.education}</p>
            </MDBCard>
            <br></br>
            <MDBCard>
              Specialities
              <p>{therapist.specialities}</p>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      </MDBContainer>
    );
  } else {
    return (
      <h1>Error...</h1>
    )
  }

};
export default ProfilePage;
