import React, { Fragment } from "react"; 
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,MDBBtn, MDBRow, MDBCol  } from "mdbreact";
import Map from "./Map/Map";
import BookingPage from "./BookingPage/BookingPage"
const TherapistCard = ({ therapist }) => {

  return (
    < >
     
     <MDBCard className='mt-5' style={{ maxWidth: '55rem' }}>
      <MDBRow className='p-2 '>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='Therapist Images' fluid height='320rem' />
        </MDBCol>
        <MDBCol md='4'>
          <MDBCardBody>
          
            <MDBCardTitle className=''>Dr. {therapist['first_name' ]} {therapist['last_name']}</MDBCardTitle>
            <MDBCardText>
              {therapist['about']}
            </MDBCardText>
            <MDBCardText>
              <small>Education, {therapist['education']}</small>
            </MDBCardText>
            <MDBCardText>
              <small>Specialities, {therapist['specialities']}</small>
            </MDBCardText>
      
          </MDBCardBody>
        </MDBCol> 
        <MDBCol md='4' className="d-flex flex-column justify-content-around">
            <Map className="p-2 col-example text-right" />
            <BookingPage/>
            <MDBBtn
                href={`/profile/${therapist['_id']}`}
                color="grey"
              >
                View Profile
            </MDBBtn>
        </MDBCol>
        </MDBRow>
      <MDBCol md=''height='10 rem' className='col-example'>
     
      </MDBCol>
   <MDBRow> 
     <MDBCol className="text-center">
            
     </MDBCol>
   </MDBRow>
    </MDBCard>    
    
    
   
    </>
  )
};

export default TherapistCard;
