import React from "react"
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  Switch,
  Route,
} from "react-router-dom";


// Import all Componentes
// import TeamPage from "./Components/Team";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";

import Login from "./Components/Login";
import RegisterPage from "./Components/RegisterPage";
import RegisterPage2 from "./Components/registerPage /RegisterPage2";
import MyMapComponent from "./Components/Map";



export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/therapistList">
          <TherapistList/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
     //     <RegisterPage/>
     <RegisterPage2 />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
