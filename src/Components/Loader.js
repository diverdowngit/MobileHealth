import Logo from "./util/mhlogo.gif"

const Loader = () => {
  return (
    <span className="spinner">
      <img src={Logo} alt="spinner-logo" />
      setTimeout = { alert("Hello")}, 3000;

    </span>
  );
};
export default Loader;
