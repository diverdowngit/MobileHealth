import React, { Fragment } from "react"; 
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const TherapistCard = ({ therapist }) => {

  return (
    <Fragment>
    <MDBCard className="mb-5 mt-5 " style={{ maxWidth: "32rem" }}>
      <MDBCardBody className="mb-5 mt-5">
        <MDBCardTitle >
        Dr. {therapist['first_name']} {therapist['last_name']}
        </MDBCardTitle>
        <MDBCardText>
        {therapist['last_name']} Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Fragment>
  )
};

export default TherapistCard;
