import React, { useState} from 'react';
import { MDBContainer,MDBRow,MDBCol,MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import "./BookingPage.css"
const BookingPage =()=> {
const [extendBooking, setextendBooking]= useState(false)

const toggle = () => {
  setextendBooking((prevState)=>!prevState);
}


  return (
    <MDBContainer className="p-0">
      <MDBBtn 
                color="green" onClick={toggle}>Make an Appointment</MDBBtn>
      <MDBModal isOpen={extendBooking} size="lg">
        <MDBModalHeader onClick={toggle} >Book your Appointment with ...</MDBModalHeader>
        <MDBModalBody>
        <MDBContainer>
  <MDBRow>
    <MDBCol md="10">
      <form>
        <div className="grey-text">
        
          <MDBInput label="Suggested name from id "   icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Suggested email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Booking an appointment for ...service" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput label="Date and Time"   icon="clock" group type="text" validate error="wrong"
            success="right" />
          <MDBInput type="textarea" rows="2" label="Message" icon="pencil-alt" />
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn style={{ padding: "1.25rem" }}
                color="green">Send request</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );}

export default BookingPage;