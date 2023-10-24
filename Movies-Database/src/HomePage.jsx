import Movies from "./Movies";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <Movies />
      </div>
    </div>
  );
};

export default HomePage;
