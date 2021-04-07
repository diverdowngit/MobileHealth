import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import AppState from './context/app/AppState';
// import TherapistContext from "../src/context/TherapistsContext"; 
// Import all Componentes
// import TeamPage from "./Components/Team";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";
import TherapistCard from "./Components/TherapistCard"

import Login from "./Components/Login/Login";
//  import RegisterPage from "./Components/RegisterPage/RegisterPage";
import RegisterPage2 from "./Components/RegisterPage2/RegisterPage2";
//  import Api from "./Api";
import ProfilePage from "./Components/ProfilePage";




export default function App() {
  

  return (
    <AppState>
      <Navbar />
        <Switch>
          <Route path="/therapistlist">
            <TherapistList />
          </Route>
          <Route path="/therapistcard">
            <TherapistCard />
          </Route>
          <Route exact path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/login">
            <Login />
        </Route> 
          <Route path="/registration">
            <RegisterPage2 />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      <Footer />
    </AppState>
    
  );
}
