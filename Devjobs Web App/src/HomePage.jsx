import { FaFilter, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Jobs from "./Jobs";
import { useGlobalContext } from "./Context";

const HomePage = () => {
  const { dark, loadMore, hide, searchInput, temp } = useGlobalContext();
  return (
    <>
      <div className="sec-two ">
        <div
          className={`${
            dark
              ? "serch-box search-mobile dark-search"
              : "serch-box search-mobile "
          }`}
        >
          <input
            onChange={searchInput}
            className={`${dark ? "dark-input" : ""}`}
            placeholder="Filter by title"
            type="text"
          />
          {/* <FaFilter className="icons filter" />
          <button className="btn ">
            <FaSearch className="icons search" />
          </button> */}
        </div>
        <div
          className={`${
            dark
              ? "serch-box search-desktop dark-search"
              : "serch-box search-desktop"
          }`}
        >
          <div className="flex-left">
            <FaSearch className="search icons icon-search" />
            <input
              onChange={searchInput}
              name="title"
              className={`${dark ? "dark-input" : ""}`}
              type="text"
              placeholder="Filter by title, company, location"
            />
          </div>
          {/* <div className="flex-left">
            <FaMapMarkerAlt className="icons location" />
            <input
              onChange={searchInput}
              name="location"
              className={`${dark ? "dark-input" : ""}`}
              type="text"
              placeholder="Filter by location"
            />
          </div> */}
          <div className="flex">
            {/* <input
              onChange={() => {
                if (fields.type == "full time") {
                  return setFields({ ...fields, type: "" });
                } else {
                  setFields({ ...fields, type: "full time" });
                }
              }}
              className="checkbox"
              type="checkbox"
              name=""
              id="checkbox"
            />
            <label htmlFor="checkbox">Full Time</label> */}
            {/* <button onClick={searchBtn} className="btn btn-search">
              Search
            </button> */}
          </div>
        </div>
      </div>
      <Jobs />
      {temp && temp.length > 0 && (
        <div
          className={`${hide ? "load-more-cont hide-btn" : "load-more-cont"}`}
        >
          <button onClick={loadMore} className="load-more">
            Load More
          </button>
        </div>
      )}
      {temp && temp.length == 0 && (
        <div className="loading-error">
          <h2
            className={`${
              dark ? "loading-text loading-white" : "loading-text"
            }`}
          >
            Please check the search term...
          </h2>
        </div>
      )}
    </>
  );
};

export default HomePage;
