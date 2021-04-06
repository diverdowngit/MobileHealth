import React from "react";
import {  MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";

const SearchForm = () => {
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
                padding-right="0"
                margin-right="0"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">

            <h3 className="font-weight-bold mb-3 p-0">
              <strong>FIND THE RIGHT
                <br></br>
                SERVICE FOR YOU
              </strong>
            </h3>
            <p>
            Physical Therapy | Massage | Speech Therapist
            </p>
            <MDBInput label="" background size="lg" />
            <p>
              Postcode | Street | City
            </p>
            <MDBInput label="" background size="lg" />
            <p>
              Search for Date
            </p>
            <MDBInput label="" background size="lg" />
            <MDBBtn backround color="green" size="md" className="">
              Check Availability
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SearchForm;