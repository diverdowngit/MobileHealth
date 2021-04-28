import { MDBBtn, MDBContainer, MDBCol } from "mdbreact";
import image from "../images/offersPannel1.png";
import image2 from "../images/offersPannel2.png";
import image3 from "../images/offersPannel3.png";

const PanelPage = () => {
  return (
    <MDBContainer className="text-center d-flex-box align-items-start ">
      <MDBCol>
        <img
          className="image"
          src={image}
          alt="offers panel one"
          width="250"
          height="170"
          to="/"
        />
<MDBBtn color="green" height="10" href="/therapistlist">Step 1: Please choose your Service here</MDBBtn>        <p >
          You can look here to see the list of all of Our Therapist Services.
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
        <MDBBtn color="green" href="#" >Step 2: Please book your Appointment</MDBBtn>
        <p>
         If you are ready to make your Appointment you can click here to book now.
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
        <MDBBtn color="green">Step 3: Enjoy your service at your home !</MDBBtn>
        <p>
          Enjoy your chosen service at home.
        </p>
      </MDBCol>
    </MDBContainer>
  );
};

export default PanelPage;
