import React, { Fragment } from "react"; 
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,MDBBtn, MDBRow, MDBCol  } from "mdbreact";
import Map from "./Map/Map";
import BookingPage from "./BookingPage/BookingPage"
const TherapistCard = ({ therapist }) => {

  console.log('therapist', therapist);

  return (
    < >
     
     <MDBCard className='mt-5' style={{ maxWidth: '55rem' }}>
      <MDBRow className='p-2 '>
        <MDBCol md='4'>
          <MDBCardImage src={therapist['profilPhoto']} alt='Therapist Images' fluid height='320rem' />
        </MDBCol>
        <MDBCol md='4'>
          <MDBCardBody>
          
            <MDBCardTitle className='h1 font-weight-bold'> {therapist['first_name' ]} {therapist['last_name']}</MDBCardTitle>
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
        </MDBCol> 
        <MDBCol md='4' className="d-flex flex-column justify-content-around">
            <Map className="p-2 col-example text-right" />
            <BookingPage therapist={therapist}/>
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
