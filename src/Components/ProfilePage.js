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
import BookingPage from "./BookingPage/BookingPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader"
import serverUrl from '../utils/serverUrl';

const ProfilePage = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${serverUrl}/therapist/${id}`).then(
      (response) => {
        setLoading(false);
        setTherapist(response.data);
      }
    );
  }, [id]);


  if (loading)  {
    console.log("load...")
    return (
    <Loader/>
    );
  }

  if (therapist) {
    return (
      
      <MDBContainer className="bc-grey" style={{ padding: 15 }}>
        {" "}
        <MDBCardTitle>
          {" "}
          <br/>
          <h3 className="bc-grey text-center">Profile</h3>
                    <br/>

        </MDBCardTitle>
        <MDBContainer className="d-flex text-center aligment mb-6 mt-5">
          <MDBRow>
            <img
              src={benJammin}
              className="rounded float-left"
              width="300"
              height="220"
              alt="aligment"
            />
            <MDBCol>
              <div className="text-center">
                <h3 style={{ color: "green" }}>
                  {therapist.first_name} {therapist.last_name}
                </h3>
                <h4>{therapist.category}</h4>
                <br />
                <br />
                <p>
                  {therapist.address.streetName}{" "}
                  {therapist.address.streetNumber},
                </p>
                <p>
                  {therapist.address.postalCode} {therapist.address.city}
                </p>
                <p>{therapist.phoneNumber}</p>
                <br />
                <br />
              </div>

              <BookingPage therapist={therapist}/>
              {/* <BookingPage style={{ padding: "5rem" }}/> */}

            </MDBCol>
          </MDBRow>
          <MDBCol className="rounded float-center">
            <MDBCard style={{ padding: "1.2rem" }}>
              About
              <p>{therapist.about}</p>
            </MDBCard>
            <br />
            <MDBCard style={{ padding: "1.2rem" }}>
              Education and Background
              <p>{therapist.education}</p>
            </MDBCard>
            <br />
            <MDBCard style={{ padding: "1.2rem" }}>
              Specialities
              <p>{therapist.specialities}</p>
            </MDBCard>
            <br />
          </MDBCol>
        </MDBContainer>
      </MDBContainer>
    );
  } else {
    return <h1>Error...</h1>;
  }
};
export default ProfilePage;
