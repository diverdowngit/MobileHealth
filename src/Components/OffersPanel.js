import { MDBBtn, MDBContainer } from "mdbreact";
import image from "../images/ChooseService.png";

const PanelPage = () => {
  return (
    <MDBContainer>
      <div  class="text-left">
        {" "}
        <img
          className="image"
          src={image}
          alt="offers panel image"
          width="1111"
          to="/"
        />
      </div>
      <br></br>
      <MDBBtn color="green">Step 1: Please choose your Service here</MDBBtn>

      <MDBBtn color="green">Step 2: Please book your Appointment here</MDBBtn>

      <MDBBtn color="green">Step 3: Please choose your Mobile Service</MDBBtn>
    </MDBContainer>
  );
};

export default PanelPage;
