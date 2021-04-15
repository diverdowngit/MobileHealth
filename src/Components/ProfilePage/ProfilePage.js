import React, { useState, useEffect } from "react";
import {
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardImage,
} from "mdbreact";
import BookingPage from "../BookingPage/BookingPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import serverUrl from "../../utils/serverUrl";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${serverUrl}/therapist/${id}`).then((response) => {
      setLoading(false);
      setTherapist(response.data);
    });
  }, [id]);

  if (loading) {
    console.log("load...");
    return <Loader />;
  }

  therapist && console.log(therapist);

  if (therapist) {
    return (
      <MDBCard className="my-5 px-5 pb-1 text-left">
      <MDBContainer className="bc-grey" style={{ padding: 15 }}>
        {" "}
        <MDBCardTitle>
          {" "}
          <br />
          <h2 className="bc-green text-left font-weight-bold">Profile</h2>
          <br />
          <h3 className="tname">
            {therapist.first_name} {therapist.last_name}
          </h3>
          <h4>{therapist.category}</h4>
        </MDBCardTitle>
        <MDBContainer className="d-flex text-left aligment mb-6 mt-5">
          <MDBRow>
            <MDBCardImage
              className="img-fluid "
              style={{
                height: "30rem",
                width: "auto",
                padding: "0  1.7rem 1.7rem 0",
              }}
              src={therapist["profilPhoto"]}
              alt="Therapist Image"
            />
          </MDBRow>
          <MDBCol className="rounded float-center">
            <MDBCardText
              className="blockquote font-weight-bold"
              style={{ padding: "1.2rem" }}
            >
              About <small>{therapist["about"]}</small>
            </MDBCardText>{" "}
            <MDBCardText
              className="blockquote font-weight-bold"
              style={{ padding: "1.2rem" }}
            >
              Education and Background <small>{therapist["education"]}</small>
            </MDBCardText>
            <MDBCardText
              className="blockquote font-weight-bold"
              style={{ padding: "1.2rem" }}
            >
              Specialities <small>{therapist["specialities"]}</small>
            </MDBCardText>
            <MDBCardText
              className="blockquote"
              style={{ padding: "1.2rem" }}
            >
              <b>Hobbies</b>
        <p>here could be ur ad or maybe more information about the therapist</p>

            </MDBCardText>
          </MDBCol>
        </MDBContainer>
        <p>
          {therapist.address.streetName} {therapist.address.streetNumber},
          <p>
            {therapist.address.postalCode} {therapist.address.city}
          </p>
        </p>
        <p>mobile: {therapist.phoneNumber}</p>{" "}
        <br/>
        <div className="pbutton">
        <BookingPage therapist={therapist} />
        </div>
      </MDBContainer>
      </MDBCard>
    );
  } else {
    return <h1>Error...</h1>;
  }
};
export default ProfilePage;
