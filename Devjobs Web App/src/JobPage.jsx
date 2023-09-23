import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";

const Job = () => {
  const { id } = useParams();
  const { loading, showUnique, job, dark } = useGlobalContext();
  console.log(job);

  useEffect(() => {
    showUnique(id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
    <div className="job-page">
      <div className="job-container">
        <div
          className={`${dark ? "job-sec-one dark-sections" : "job-sec-one "}`}
        >
          <div className="job-logo-container">
            <img
              style={{ backgroundColor: job?.logoBackground }}
              src={job?.logo}
              alt=""
              className="job-logo"
            />
          </div>
          <div className="com-details">
            <h2 className={`${dark ? "com-name light-title" : "com-name "}`}>
              {job?.company}
            </h2>
            <h4 className="website">{job?.website}</h4>
          </div>
          <div>
            <button className={`${dark ? "site-btn dark-btn" : "site-btn "}`}>
              company site
            </button>
          </div>
        </div>
        <div
          className={`${dark ? "job-sec-two dark-sections" : "job-sec-two "}`}
        >
          <div>
            <div>
              <span className="job-flex">
                <span className="time">{job?.postedAt}</span>
                <span className="dot"></span>
                <span className="type">{job?.contract}</span>
              </span>
              <h2
                className={`${dark ? "job-title light-title" : "job-title "}`}
              >
                {job?.position}
              </h2>
              <h4 className="job-country">{job?.location}</h4>
            </div>
            <div>
              <button className="btn-apply ">Apply Now</button>
            </div>
          </div>
          <div className={`${dark ? "content dark-sections" : "content "}`}>
            <p className="desc">{job?.description}</p>
            <div className="req-section">
              <h2
                className={`${
                  dark ? "requirement light-title" : "requirement "
                }`}
              >
                Requirements
              </h2>
              <div className="req-content">
                <p className="desc">{job?.requirements?.content}</p>
                <ul>
                  {job?.requirements?.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="what-section">
              <h2
                className={`${dark ? "what-title light-title" : "what-title "}`}
              >
                What You Will Do
              </h2>
              <div className="what-content">
                <p className="desc">{job?.role?.content}</p>
                <ol>
                  {job?.role?.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${dark ? "footer-mobile dark-sections" : "footer-mobile "}`}
      >
        <button className="btn-apply">Apply Now</button>
      </div>
      <div
        className={`${
          dark ? "footer-desktop dark-sections" : "footer-desktop "
        }`}
      >
        <div className="footer-cont">
          <div>
            <h2 className={`${dark ? "title light-title" : "title "}`}>
              {job?.position}
            </h2>
            <h4 className="company">{job?.company}</h4>
          </div>
          <div>
            <button className="btn-apply">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
