import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardBody } from "mdbreact";
import rafa from "../../images/rafa.png";
import christin from "../../images/christin.png";
import fred from "../../images/fred.png";
import tim from "../../images/tim.jpeg";
import "./Team.css";

const Team = () => {
  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBCardBody>
        <h2 className="ateam h1-responsive font-weight-bold my-5">
          💚 Our amazing team 💚
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Dived into the deep of the coding ocean - Aufgetaucht aus dem Teich
          der Turtles.
        </p>
        <MDBRow className="text-left">
          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="8" lg="6" className="float-right">
              <img className="tpic image float-right" src={fred} alt="fred" />
              <MDBCardText
                className="blockquote font-weight-bold text-left"
                style={{ padding: "1.2rem" }}
              >
                <h4 className="tname font-weight-bold mb-3">Fred</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Destroyer 💣
                </h6>
                <p className="grey-text">He can destroy everything .</p>{" "}
              </MDBCardText>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="8" lg="6" className="float-right">
              <img
                className="tpic image float-right"
                src={christin}
                alt="christin"
              />
              <MDBCardText
                className="blockquote font-weight-bold text-left"
                style={{ padding: "1.2rem" }}
              >
                <h4 className="tname font-weight-bold mb-3">Christin</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Photographer 📸
                </h6>
                <p className="grey-text">
                  70hours a week - for me its normal ;)
                </p>
              </MDBCardText>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="8" lg="6" className="float-right">
              <img className="tpic image float-right" src={rafa} alt="rafa" />{" "}
              <MDBCardText
                className="blockquote font-weight-bold text-left"
                style={{ padding: "1.2rem" }}
              >
                <h4 className="tname font-weight-bold mb-3">Rafael</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer 🍻
                </h6>
                <p className="grey-text">
                  i am the product owner and the best teamlead ever
                </p>
              </MDBCardText>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-5">
            <MDBCol md="8" lg="6" className="float-right">
              <img className="tpic image float-right" src={tim} alt="tim" />
              <MDBCardText
                className="blockquote font-weight-bold text-left"
                style={{ padding: "1.2rem" }}
              >
              <h4 className="tname font-weight-bold mb-3">Tim</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Junior Front-end Developer and git Clown 🤹🏽
              </h6>
              <p className="grey-text">
                still learning - not to complain to much about this or that -
                lorem ipsum love my live
              </p>
              </MDBCardText>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Team;
