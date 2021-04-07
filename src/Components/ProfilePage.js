import {
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
} from "mdbreact";
import benJammin from "../images/benJammin.png";
// import {therapist} from "TherapistsContext";


const ProfilePage = ({ therapist }) => {
  
  return (
    <MDBContainer className="bc-grey" style={{ padding: 15 }}>
      {" "}
      <h3 className="bc-grey">Profile</h3>
      <MDBCardTitle >
        {/* Dr. {therapist["first_name"]} {therapist["last_name"]}{" "} */}
      </MDBCardTitle>
      <MDBContainer className="d-flex justify-content-left mb-6 mt-5 ">
        <MDBRow>
          <img
            style={{ padding: 0 }}
            src={benJammin}
            className="rounded float-left"
            width="120"
            height="150"
            alt="aligment"
          />

          <h5>
            Dr. Ben Jammin <br></br>
            Physiotherapist <br></br>
            WBS Street 11 <br></br>
            0815 Turtletown
          </h5>
        </MDBRow>
        <MDBCol>
          <MDBBtn
            className="rounded float-center"
            style={{ padding: 20 }}
            color="green"
          >
            Make Appointment
          </MDBBtn>
        </MDBCol>
        <MDBCol md="6" className="mb-6">
          <MDBCard>
          {/* {therapist["about"]} */}
            About
            <br></br>
            safas
            <br></br>
            sadsad
            <br></br>
            asdsa
          </MDBCard>
          <br></br>
          <MDBCard>
          {/* {therapist['education']} {therapist['background']}  */}
            Education and Background
            <br></br>
            safas
            <br></br>
            sadsad
            <br></br>
            asdsa
          </MDBCard>
          <br></br>
          <MDBCard>
          {/* {therapist['specialities']} */}
            Specialities
            <br></br>
            safas
            <br></br>
            sadsad
            <br></br>
            asdsa
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </MDBContainer>
  );
};
export default ProfilePage;
