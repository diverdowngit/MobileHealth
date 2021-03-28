import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from "mdbreact";

const PanelPage = () => {
return (
<MDBContainer>
<h1>This will be the Offer Panel.</h1>
  <MDBCardGroup deck>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle tag="h5">Choose your Service</MDBCardTitle>
        <MDBCardText>
          This is a wider panel with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter small muted>
        Bla
      </MDBCardFooter>
    </MDBCard>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle tag="h5">Book your Appointment</MDBCardTitle>
        <MDBCardText>
          This panel has supporting text below as a natural lead-in to
          additional content.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter small muted>
      Bla
      </MDBCardFooter>
    </MDBCard>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle tag="h5">Mobile Service</MDBCardTitle>
        <MDBCardText>
          This is a wider panel with supporting text below as a natural
          lead-in to additional content. This panel has even longer
          content than the first to show that equal height action.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter small muted>
      Bla
      </MDBCardFooter>
    </MDBCard>
  </MDBCardGroup>
</MDBContainer>
);
};

export default PanelPage;