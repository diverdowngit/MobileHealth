import { useContext } from "react";
import TherapistsContext from "../context/TherapistsContext"

const Api = () => {
  const {therapists, setTherapists } = useContext(TherapistsContext)
 

};

export default Api;
