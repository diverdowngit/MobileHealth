import { useContext } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
import TherapistsContext from "../context/TherapistsContext"

const Api = () => {
  const {therapists, setTherapists } = useContext(TherapistsContext)
 // const { id } = useParams();

};

export default Api;
