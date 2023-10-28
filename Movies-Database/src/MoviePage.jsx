import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";
import alternate from "../public/notavailable.png";

const MoviePage = () => {
  const { moviePage, showUnique, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    showUnique(id);
  }, []);

  if (loading) {
    return <h2 className="loading movie-page">Loading...</h2>;
  }

  return (
    <div className="movie-page">
      <article className="back-cont">
        <Link to="/" className="back-btn">
          back
        </Link>
      </article>
      <section className="movie-section">
        <div className="left">
          <img
            src={moviePage.Poster}
            onError={(e) => {
              e.target.src = alternate;
            }}
            alt=""
            className="movie-poster"
          />
        </div>
        <div className="right">
          <ul className="list">
            <span>
              <li className="heading">Movie Name:</li>
              <li className="content">{moviePage?.Title}</li>
            </span>
            <span>
              <li className="heading">Run Time:</li>
              <li className="content">{moviePage?.Runtime}</li>
            </span>
            <span>
              <li className="heading">Year:</li>
              <li className="content">{moviePage?.Year}</li>
            </span>
            <span>
              <li className="heading">Director:</li>
              <li className="content">{moviePage?.Director}</li>
            </span>
            <span>
              <li className="heading">Cast:</li>
              <li className="content">{moviePage?.Actors}</li>
            </span>
            <span>
              <li className="heading">Language:</li>
              <li className="content">{moviePage?.Language}</li>
            </span>
            <span>
              <li className="heading">Genre:</li>
              <li className="content">{moviePage?.Genre}</li>
            </span>
            <span>
              <li className="heading">IMDB Rating:</li>
              <li className="content">{moviePage?.imdbRating}</li>
            </span>
            <span>
              <li className="heading">IMDB Votes:</li>
              <li className="content">{moviePage?.imdbVotes} Votes</li>
            </span>
            <span>
              <li className="heading">Country:</li>
              <li className="content">{moviePage?.Country}</li>
            </span>
            <span>
              <li className="heading">Box Office:</li>
              <li className="content">{moviePage?.BoxOffice}</li>
            </span>
            <span>
              <li className="heading">Type:</li>
              <li className="content">{moviePage?.Type}</li>
            </span>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
