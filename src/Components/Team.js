import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import rafa from "../images/rafa.png";
import christin from "../images/christin.png";
import fred from "../images/fred.png";
import tim from "../images/tim.jpeg";

const Team = () => {
  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBCardBody>
        <h2
          style={{ color: "green" }}
          className="h1-responsive font-weight-bold my-5"
        >
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Dived into the deep of the coding ocean - Aufgetaucht aus dem Teich
          der Turtles.
        </p>
        <MDBRow className="text-left">
          <MDBCol lg="3" md="12" className="mb-5">
           
            <MDBCol md="8" lg="6" className="float-right">
              <img
                className="image float-right"
                src={fred}
                alt="fred"
                width="300"
                height="220"
              />
              <h4 className="font-weight-bold mb-3" style={{ color: "green" }}>
                Fred
              </h4>
              <h6 className="font-weight-bold grey-text mb-3">Web Destroyer</h6>
              <p className="grey-text">
                He can destroy everything .
              </p>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="6" lg="6" className="float-left"></MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <img
                className="image float-right"
                src={christin}
                alt="christin"
                width="300"
                height="220"
              />
              <h4 className="font-weight-bold mb-3" style={{ color: "green" }}>
                Christin
              </h4>
              <h6 className="font-weight-bold grey-text mb-3">Photographer</h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="6" lg="6" className="float-left"></MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <img
                className="image float-right"
                src={rafa}
                alt="rafa"
                width="300"
                height="220"
              />{" "}
              <h4 className="font-weight-bold mb-3" style={{ color: "green" }}>
                Rafael
              </h4>
              <h6 className="font-weight-bold grey-text mb-3">Web Developer</h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="6" lg="6" className="float-left"></MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <img
                className="image float-right"
                src={tim}
                alt="tim"
                width="300"
                height="220"
                to="/"
              />
              <h4 className="font-weight-bold mb-3" style={{ color: "green" }}>
                Tim
              </h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Junior Front-end Developer
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Team;
