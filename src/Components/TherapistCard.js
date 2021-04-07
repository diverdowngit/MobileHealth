import React, { Fragment } from "react"; 
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,MDBBtn, MDBRow, MDBCol  } from "mdbreact";

const TherapistCard = ({ therapist }) => {

  return (
    <Fragment>
     
     <MDBCard className='mt-5' style={{ maxWidth: '34rem' }}>
      <MDBRow className='p-2 '>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid height='200rem' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className=''>Dr. {therapist['first_name' ]} {therapist['last_name']}</MDBCardTitle>
            <MDBCardText>
              {therapist['about']}
            </MDBCardText>
            <MDBCardText>
              <small>Specialities, {therapist['specialities']}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol> <MDBBtn  href="/LandingPage" color="green" size='sm'>
      Make Appointment
      </MDBBtn>
      <MDBBtn
        href={`/profile/${therapist['_id']}`}
        color="grey"
        size='sm'
      >
        View Profile
      </MDBBtn>
      </MDBRow>

    </MDBCard>     
    </Fragment>
  )
};

export default TherapistCard;
