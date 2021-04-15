import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css';

const Login = ({onAuth, onSetCredentials}) => {
return (
<MDBContainer className="flex-center" >
  <MDBRow >
    <MDBCol >
      <form >
        <br/>
        <h2 className="text-center font-weight-bold mb-3">Login</h2>
        <br/>
        <div className="grey-text">
          <MDBInput label="Type your email" name="emailAddress" icon="envelope" group type="email" validate error="wrong"
            success="right" onChange={onSetCredentials}/>
          <MDBInput label="Type your password" name="password" icon="lock" group type="password" onChange={onSetCredentials} validate />
        </div>
        <br/>
        <div className="text-center">
          <MDBBtn color="green" onClick={onAuth}>Login</MDBBtn>
          <br/>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Login;