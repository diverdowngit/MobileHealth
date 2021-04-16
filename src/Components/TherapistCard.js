import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Map from "./Map/Map";
import BookingPage from "./BookingPage/BookingPage";
import "./TherapistCard.css";

const TherapistCard = ({ therapist }) => {
  return (
    <>
      <MDBCard className="mt-5" style={{ maxWidth: "100%" }}>
        <MDBRow className="p-5 ">
          <MDBCol md="4">
            <MDBCardImage
              src={therapist["profilPhoto"]}
              alt="Therapist Images"
              fluid
              height="300rem"
              width="240rem"
            />

            <Map
              className="p-4 col-example text-right"
              address={therapist.address}
            />
          </MDBCol>
        
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="h1 font-weight-bold">
                {" "}
                {therapist["first_name"]} {therapist["last_name"]}
              </MDBCardTitle>

              <MDBCardText className="blockquote font-weight-bold">
                Category{" "}
                <small>
                  {"  "}
                  {therapist["category"]}
                </small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                About <small> {therapist["about"]}</small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Education<small> {therapist["education"]} </small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Specialities <small> {therapist["specialities"]}</small>
              </MDBCardText>
              <br />
            <br />
            </MDBCardBody>
            <MDBRow               style={{margin:"1rem"}}
>
            <MDBBtn
              size="lg"
              href={`/profile/${therapist["_id"]}`}
              color="grey"
              className="ftherapist custom-button"
              style={{maxwidth:"20rem", margin:"0.4rem"}}
            >
              View Profile
            </MDBBtn>
          <BookingPage  therapist={therapist} />
          </MDBRow>

          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};

export default TherapistCard;
