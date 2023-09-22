import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Jobs = () => {
  const { data, loading, list, dark, temp } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading-cont">
        <h2
          className={`${dark ? "loading-text loading-white" : "loading-text"}`}
        >
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="jobs">
      {temp &&
        temp.slice(0, list).map((item, index) => {
          const {
            id,
            company,
            logo,
            contract,
            position,
            postedAt,
            location,
            logoBackground,
          } = item;

          return (
            <div key={index} className={`${dark ? "job dark-job" : "job"}`}>
              <img
                style={{ backgroundColor: logoBackground }}
                src={logo}
                alt=""
                className="job-img"
              />
              <span className="job-flex">
                <span className="time">{postedAt}</span>
                <span className="dot"></span>
                <span className="type">{contract}</span>
              </span>
              <Link key={index} className="link" to={`job/${id}`}>
                <h2 className={`${dark ? "title light-title" : "title "}`}>
                  {position}
                </h2>
              </Link>

              <h4 className="company">{company}</h4>
              <p className="country">{location}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Jobs;
