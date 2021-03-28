import React from "react"
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


//Import all Componentes
import TeamPage from "./Components/Team";
import NavBarPage from "./Components/NavbarPage";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";
import Login from "./Components/Login";
import RegisterPage from "./Components/RegisterPage";

export default function App() {
  return (
    <>
    <NavBarPage />
    <div>
      <h1 style={{textAlign: "center"}}>Mobile Health</h1>
      <h3 style={{textAlign: "center"}}>Physical Therapy | Massage | Speech Therapist</h3>
    </div>
    <div style={{height: 800}} >
    <Switch>
          <Route path="/TherapistList">
            <TherapistList/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Registration">
            <RegisterPage/>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    <Footer />
      </>
  );
}
