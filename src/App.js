import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import TherapistContext from "../src/context/TherapistsContext"; 

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
// import Api from "./Api";
export default function App() {
  const [therapists, setTherapists] = useState([]);

  const url = `https://cherry-cupcake-02141.herokuapp.com/therapist/`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setTherapists(response.data);
    });
  }, [url]);

  return (
    <>
      <Navbar />
      <TherapistContext.Provider value={{ therapists, setTherapists }}>
        <Switch>
          <Route path="/therapistList">
            <TherapistList />
          </Route>
          <Route path="/therapistCard">
            <TherapistCard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          {/* <Route path="/registration2">
          <RegisterPage2 />
        </Route> */}

          <Route path="/registration">
            <RegisterPage2 />
          </Route>

          {/* <Route path="/registration">
         <RegisterPage/>
        </Route> */}

          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </TherapistContext.Provider>
      <Footer />
    </>
  );
}
