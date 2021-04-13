
import {useState, useEffect} from "react";
import Logo from "./util/mhlogo.gif"

const Loader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);



  if (loading) return <Loader />;
//   return (
//     <span className="spinner">
//       <img src={Logo} alt="spinner-logo" />
//       setTimeout = { alert("Hello")}, 3000;

//     </span>
//   );
};
export default Loader;
