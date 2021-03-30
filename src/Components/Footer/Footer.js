import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
             sooo my work already done  :) THX
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">original</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">tims</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">futter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">skills</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
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