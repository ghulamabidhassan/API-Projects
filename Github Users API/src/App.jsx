import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment/moment";
import {
  FaSun,
  FaSearch,
  FaMapMarkerAlt,
  FaUnlink,
  FaTwitter,
  FaBusinessTime,
  FaMoon,
} from "react-icons/fa";

function App() {
  const [moon, setMoon] = useState(false);
  const [user, setUser] = useState();
  const [dark, setDark] = useState(false);
  const [data, setData] = useState();
  let url = `https://api.github.com/users/ghulamabidhassan`;

  const darkMode = () => {
    setMoon(!moon);
    setDark(!dark);
  };

  useEffect(() => {
    fetchSample();
  }, []);

  const fetchSample = async () => {
    let { data } = await axios.get(url);
    setData(data);
  };

  const fetchUser = async (e) => {
    e.preventDefault();
    let userUrl = `https://api.github.com/users/${user}`;
    let { data } = await axios.get(userUrl);
    setData(data);
  };

  const userSearch = (e) => {
    let search = e.currentTarget.value;
    setUser(search);
  };

  return (
    <div className={dark ? "main dark-main " : "main"}>
      <div className="container">
        <section className={dark ? "section-one text-white " : "section-one "}>
          <div>
            <h2 className="title">devfinder</h2>
          </div>
          <div>
            <h4 className="light">{dark ? "light" : "dark"}</h4>

            {moon ? (
              <FaSun onClick={darkMode} className="icon sun" />
            ) : (
              <FaMoon onClick={darkMode} className="icon moon" />
            )}
          </div>
        </section>
        <form
          onSubmit={fetchUser}
          className={dark ? "section-two light-dark" : "section-two "}
        >
          <FaSearch className="icon search" />
          <input
            onChange={userSearch}
            placeholder="Search Github username..."
            type="text"
            className={dark ? " light-dark" : ""}
          />
          <button type="submit" className="btn">
            search
          </button>
        </form>
        <section
          className={
            dark ? "section-three user light-dark" : "section-three user "
          }
        >
          <article className="sidebar">
            <div>
              <img
                src={data && data.avatar_url}
                alt=""
                className="img-desktop"
              />
            </div>
          </article>
          <div>
            <article className="article-one">
              <div>
                <img src={data && data.avatar_url} alt="" className="img" />
              </div>
              <div className="right">
                <div>
                  <h2 className={dark ? "username count-white" : "username"}>
                    {data && data.name}
                  </h2>
                  <h2 className="user-id">@{data && data.login}</h2>
                </div>
                <div>
                  <h3 className={dark ? "joined count-white" : "joined"}>
                    {data && moment(data.created_at).format("MMM Do YY")}
                  </h3>
                </div>
              </div>
            </article>
            <article className="article-two">
              <p className={dark ? "bio count-white" : "bio"}>
                {data?.bio ? data.bio : "This profile has no bio"}
              </p>
              <div className={dark ? "follows dark-main" : "follows "}>
                <div>
                  <span className="title">Repos</span>
                  <span className={dark ? "count count-white" : "count"}>
                    {data && data.public_repos}
                  </span>
                </div>
                <div>
                  <span className="title">followers</span>
                  <span className={dark ? "count count-white" : "count"}>
                    {data && data.followers}
                  </span>
                </div>
                <div>
                  <span className="title">following</span>
                  <span className={dark ? "count count-white" : "count"}>
                    {data && data.following}
                  </span>
                </div>
              </div>
            </article>
            <div className="socials-cont">
              <div className="socials">
                <div className="social">
                  <span className="icon-link">
                    <FaMapMarkerAlt className="icon social-icon location" />
                  </span>
                  <span className={dark ? "url count-white" : "url "}>
                    {data?.location ? data.location : "Not Available"}
                  </span>
                </div>
                <div className="social">
                  <span className="icon-link">
                    <FaUnlink className="icon social-icon link" />
                  </span>
                  <a target="blank" href={data && data.blog}>
                    <span className={dark ? "url count-white" : "url "}>
                      {data?.blog ? data.blog : "Not Available"}
                    </span>
                  </a>
                </div>
              </div>
              <div className="socials">
                <div className="social">
                  <span className="icon-link">
                    <FaTwitter className="icon social-icon location" />
                  </span>
                  <a target="blank" href={data && data.twitter_username}>
                    <span className={dark ? "url count-white" : "url "}>
                      {data?.twitter_username
                        ? data.twitter_username
                        : "Not Available"}
                    </span>
                  </a>
                </div>
                <div className="social">
                  <span className="icon-link">
                    <FaBusinessTime className="icon social-icon location" />
                  </span>
                  <a target="blank" href={data && data.organizations_url}>
                    <span className={dark ? "url count-white" : "url "}>
                      <a
                        target="blank"
                        href={data?.organizations_url && data.organizations_url}
                      >
                        {data?.organizations_url ? "@Github" : "Not Available"}
                      </a>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
