import React from "react";
import { Link} from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
  <nav>
  <ul >
    <li >
      <Link to="/">Logo</Link>
    </li>
    <li>
      <Link to="/">Are you a Therapist</Link>
    </li>
    <li>
      <Link to="/Login">LOGIN</Link>
    </li>
    <li>
      <Link to="/Registration">Register</Link>
    </li>

  </ul>
</nav>

);