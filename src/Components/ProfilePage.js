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
import BookingPage from "./BookingPage/BookingPage"
import { useParams } from "react-router-dom";
import axios from "axios";
import serverUrl from '../utils/serverUrl';

const ProfilePage = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios(`${serverUrl}/therapist/${id}`).then(
      (response) => {
        setloading(false);
        setTherapist(response.data);
      }
    );
  }, [id]);

  therapist && console.log(therapist);

  if (loading) {
    return (
      <h1>
        <br />
        <div
          className="spinner-border fast"
          style={{ color: "green" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </h1>
    );
  }

  if (therapist) {
    return (
      <MDBContainer className="bc-grey" style={{ padding: 15 }}>
        {" "}
        <MDBCardTitle>
          {" "}
          <h3 className="bc-grey text-center">Profile</h3>
        </MDBCardTitle>
        <MDBContainer className="d-flex justify-content-center aligment mb-6 mt-5">
          <MDBRow>
            <img
              src={benJammin}
              className="rounded float-left"
              width="440"
              height="360"
              alt="aligment"
            />
            <MDBCol >
              <div className="text-center">
              <h3 style={{ color: "green" }}>
                {therapist.first_name} {therapist.last_name}
              </h3>
              <h4>{therapist.category}</h4>
              <br />
              <br />
              <p>
                {therapist.address.streetName} {therapist.address.streetNumber},
              </p>
              <p>
                {therapist.address.postalCode} {therapist.address.city}
              </p>
              <p>{therapist.phoneNumber}</p>
              <br />
              <br />
              </div>
              {/* <MDBBtn
                className="rounded float-center"
                style={{ padding: "1.25rem" }}
                color="green"
              >
                Make AN Appointment
              </MDBBtn> */}
              <BookingPage/>
            </MDBCol>
          </MDBRow>
          <MDBCol className="rounded float-center">
            <MDBCard style={{ padding: "1.2rem" }}>
              About
              <p >{therapist.about}</p>
            </MDBCard>
            <br/>
            <MDBCard style={{ padding: "1.2rem" }}>
              Education and Background
              <p>{therapist.education}</p>
            </MDBCard>
            <br/>
            <MDBCard style={{ padding: "1.2rem" }}>
              Specialities
              <p>{therapist.specialities}</p>
            </MDBCard>
            <br/>

          </MDBCol>
        </MDBContainer>
      </MDBContainer>
    );
  } else {
    return <h1>Error...</h1>;
  }
};
export default ProfilePage;
