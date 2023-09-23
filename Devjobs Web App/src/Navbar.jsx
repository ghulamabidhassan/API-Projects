import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { dark, darkMode } = useGlobalContext();
  return (
    <section className="sec-one">
      <nav className="navbar ">
        <div className="left">
          <Link className="link" to="/">
            <img
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1695483345/devjobs%20web%20app/logo_l2v6kq.svg"
              alt=""
              className="logo"
            />
          </Link>
        </div>
        <div className="right">
          <FaSun onClick={darkMode} className="sun icons" />
          <div
            onClick={darkMode}
            className={`${dark ? "toggle toggle-right" : "toggle "}`}
          >
            <div className="circle"></div>
          </div>
          <FaMoon onClick={darkMode} className="moon icons" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
