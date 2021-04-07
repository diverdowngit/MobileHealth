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
import axios from "axios";

const ProfilePage = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios(`https://cherry-cupcake-02141.herokuapp.com/therapist/${id}`).then(
      (response) => {
        setloading(false);
        setTherapist(response.data);
      }
    );
  }, [id]);

  therapist && console.log(therapist);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (therapist) {
    return (
      <MDBContainer className="bc-grey" style={{ padding: 15 }}>
        {" "}
        <h3 className="bc-grey">Profile</h3>
        <MDBCardTitle>
        </MDBCardTitle>
        <MDBContainer className="d-flex justify-content-left mb-6 mt-5">
          <MDBRow>
            <img
              src={benJammin}
              className="rounded float-left"
              width="120"
              height="150"
              alt="aligment"
            />
            <MDBCol>
              <h3>
                {therapist.first_name} {therapist.last_name}
              </h3>
              <h4>{therapist.category}</h4>
              <br></br>
              <p>
                {therapist.address.streetName} {therapist.address.streetNumber},
              </p>
              <p>
                {therapist.address.postalCode} {therapist.address.city}
              </p>
              <p>{therapist.phoneNumber}</p>
              <MDBBtn
                className="rounded float-center"
                style={{ margin: 0 }}
                color="green"
              >
                Make Appointment
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBCol md="6" className="mb-6">
            <MDBCard>
              About
              <p>{therapist.about}</p>
            </MDBCard>
            <br></br>
            <MDBCard>
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
    return <h1>Error...</h1>;
  }
};
export default ProfilePage;
