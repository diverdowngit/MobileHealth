import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css';

const Login = ({onAuth, onSetCredentials}) => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form>
        <br></br>
        <p className="h5 text-center mb-3">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" name="emailAddress" icon="envelope" group type="email" validate error="wrong"
            success="right" onChange={onSetCredentials}/>
          <MDBInput label="Type your password" name="password" icon="lock" group type="password" onChange={onSetCredentials} validate />
        </div>
        <div className="text-center">
          <MDBBtn color="green" onClick={()=>onAuth()}>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Login;