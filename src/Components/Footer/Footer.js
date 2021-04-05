import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h1 className="title font-big" >Mobile Health</h1>
    
          </MDBCol>
          <MDBCol md="2">
            <h5 className="about">About Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Our Story</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">The Team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Our Reviews</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol><h5 className="patients">For Patients</h5>
          <ul>
              <li className="list-unstyled">
                <a href="#!">Create new User</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Patients Login</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Reviews Policy</a>
              </li>
            </ul>
            </MDBCol>
          <MDBCol><h5 className="therapists" >For Therapists</h5>
          <ul>
              <li className="list-unstyled">
                <a href="#!">Add your Therapy</a>
              </li>
              <li className="list-unstyled">
                <a href="/login">Therapist Login</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Our Reviews</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow>

    <MDBContainer className="text-center">
      <a href="#!" className="fb-ic mr-4 text-center">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="#!" className="pin-ic mr-3">
        <MDBIcon fab icon="pinterest" />
      </a>
      <a href="#!" className="yt-ic mr-3">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="https://github.com/ChristinThoma/Mobile_Health_FrontEnd" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
    </MDBContainer>
        </MDBRow>
        <br></br>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/ChristinThoma/Mobile_Health_FrontEnd"> Mobile-Health.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;