import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AppState from "./context/app/AppState";
// import TherapistContext from "../src/context/TherapistsContext";
// import TeamPage from "./Components/Team";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";
import TherapistCard from "./Components/TherapistCard";
import Login from "./Components/Login/Login";
import RegisterPage2 from "./Components/RegisterPage2/RegisterPage2";
import ProfilePage from "./Components/ProfilePage";
import { login } from "./utils/auth";

export default function App() {
  const [credentials, setCredentials] = useState();

  const handleSetCredentials = (e) => {
    console.log(e.target);
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAuthentication = async () => {
    await login(credentials);
  };

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
        {/* <Route path="/login">
            <Login />
        </Route>  */}
        <Route path="/registration">
          <RegisterPage2 />
        </Route>
        <Route path="/auth">
          <Login
            onAuth={handleAuthentication}
            onSetCredentials={handleSetCredentials}
          />
        </Route>
        {/* <Route path="/registration">
         <RegisterPage/>
        </Route> */}

        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </AppState>
  );
}
