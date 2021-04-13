import React, { Fragment } from "react"; 
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,MDBBtn, MDBRow, MDBCol  } from "mdbreact";
import Map from "./Map/Map";
const TherapistCard = ({ therapist }) => {

  return (
    < >
     
     <MDBCard className='mt-5' style={{ maxWidth: '55rem' }}>
      <MDBRow className='p-2 '>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='Therapist Images' fluid height='400rem' />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
          
            <MDBCardTitle className='h1 font-weight-bold'>Dr. {therapist['first_name' ]} {therapist['last_name']}</MDBCardTitle>
            <MDBCardText className="blockquote font-weight-bold">
            Category <p> <small>
                {therapist['category']}</small></p>
            </MDBCardText>
            <MDBCardText className="blockquote font-weight-bold">
              About <p> <small>
                {therapist['about']}</small></p>
            </MDBCardText>
            <MDBCardText className="blockquote font-weight-bold">
             Education <p><small>{therapist['education']} </small></p>
            </MDBCardText>
            <MDBCardText className="blockquote font-weight-bold">
             Specialities   <p><small>{therapist['specialities']}</small></p>
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
      <MDBCol md=''height='10 rem' className='col-example'>
      <Map  />
      </MDBCol>
    </MDBCard>    
    
    
   
    </>
  )
};

export default TherapistCard;
