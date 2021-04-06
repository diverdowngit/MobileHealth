import { MDBBtn, MDBContainer, MDBCol } from "mdbreact";
import image from "../images/offersPannel1.png";
import image2 from "../images/offersPannel2.png";
import image3 from "../images/offersPannel3.png";

const PanelPage = () => {
  return (
    <MDBContainer className="text-center d-flex align-items-start ">
      <MDBCol>
        <img
          className="image"
          src={image}
          alt="offers panel one"
          width="250"
          height="170"
          to="/"
        />
        <MDBBtn color="green" height="10" href="http://localhost:3000/therapistlist">Step 1: Please choose your Service here</MDBBtn>
        <p >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </MDBCol>
      <MDBCol>
        <img
          className="image"
          src={image2}
          alt="offers panel one"
          width="250"
          height="170"
          to="/"
        />
        <MDBBtn color="green" href="http://localhost:3000/therapistcard" >Step 2: Please book your Appointment</MDBBtn>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. 
        </p>
      </MDBCol>
      <MDBCol>
        <img
          className="image"
          src={image3}
          alt="offers panel one"
          width="250"
          height="170"
          to="/"
        />
        <MDBBtn color="green">Step 3: Please choose your Mobile Service</MDBBtn>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </MDBCol>
    </MDBContainer>
  );
};

export default PanelPage;
