import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Shared = () => {
  const { dark } = useGlobalContext();
  return (
    <div className="main">
      <div className={`${dark ? "container dark-body" : "container "}`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Shared;
