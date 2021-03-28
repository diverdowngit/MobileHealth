import React from "react";
import {  MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard lg="3" className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.minimed.at/fileadmin/_processed_/0/7/csm_Physiotherapie_aeaf6ee751.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Service
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Find the right service for you!</strong>
            </h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <MDBInput label="Example label" background size="lg" />
            <MDBInput label="Example label" background size="lg" />
            <MDBInput label="Example label" background size="lg" />
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Search
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;