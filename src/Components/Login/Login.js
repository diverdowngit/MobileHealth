import React, { useContext } from "react";
import UsersContext from '../../context/UsersContext';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import "./Login.css";

const Login = () => {
  const { handleAuthentication, handleSetCredentials } = useContext(UsersContext);
  
  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBContainer className="text-left md-6 mb-6">
        <MDBRow>
          <MDBCol>
            <form>
              <br />
              <h2 className="text-center font-weight-bold">Login</h2>
              <br />
              <div className="ilogin grey-text">
                <MDBInput
                  label="Type your email"
                  name="emailAddress"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleSetCredentials}
                />
                <MDBInput
                  label="Type your password"
                  name="password"
                  icon="lock"
                  group
                  type="password"
                  onChange={handleSetCredentials}
                  validate
                />
              </div>
              <br />
              <div className="text-center">
                <MDBBtn color="green" onClick={handleAuthentication}>
                  Login
                </MDBBtn>
                <br />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
    </MDBCard>
  );
};


export default Login;
