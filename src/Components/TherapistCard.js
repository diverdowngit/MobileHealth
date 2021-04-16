import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Map from "./Map/Map";
import BookingPage from "./BookingPage/BookingPage";

const TherapistCard = ({ therapist }) => {
  return (
    <>
      <MDBCard className="mt-5">
        <MDBRow className="p-5 ">
          <MDBCol md="3">
            <MDBCardImage
              src={therapist["profilPhoto"]}
              alt="Therapist Images"
              fluid
              height="320rem"
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
                Category <small>{therapist["category"]}</small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                About <small>{therapist["about"]}</small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Education<small>{therapist["education"]} </small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Specialities <small>{therapist["specialities"]}</small>
              </MDBCardText>
              <br />
              <MDBRow>
                <MDBCol md="4">
                  <MDBBtn
                    href={`/profile/${therapist["_id"]}`}
                    color="grey"
                    className="custom-button"
                    size="lg"
                  >
                    View Profile
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="4">
                  <BookingPage therapist={therapist} />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};

export default TherapistCard;
